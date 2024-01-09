<?php

namespace App\Actions;

use App\Enums\OrderStatus;
use App\Facades\Cart;
use App\Facades\CountryFacade;
use App\Helpers\SiteHelper;
use App\Http\Requests\Checkout\StoreOrderRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cookie;

class OrderProcessAction
{
    public function handle(StoreOrderRequest $request)
    {
        $billing = $request->input('billing');
        $shipping = $request->input('shipping');
        if (0 == $request->input('select_shipping_address')) {
            $shipping = $billing;
        }
        $user = Auth::user();
        if ($shipping['country_id'] != $user->country_id) {
            $user->country_id = $shipping['country_id'];
            $user->save();
            CountryFacade::set($shipping['country_id']);
            Cart::changeCountry();
        }
        $data = [
            'status'        => OrderStatus::Pending,
            'shipping'      => $shipping,
            'billing'       => $billing,
            'total'         => Cart::totalValue(),
            'tax_total'     => Cart::vatValue(),
//                'discount_total'     => Cart::discount(),
            'currency_id'   => SiteHelper::currency()->id,
            'country_id'    => $shipping['country_id'],
            'items'         => Cart::products()->map(function ($item, $key) {
                return [
                    'id' => $item['id'],
                    'sku' => $item['sku'],
                    'r_price' => $item['r_price'],
                    'quantity' => $item['quantity'],
                    'amount' => $item['amount'],
                ];
            })->toArray(),
        ];
        if (Cookie::has('click_id')) {
            $data['metric'] = [
                'click_id'      => Cookie::get('click_id'),
                'utm_medium'    => Cookie::get('utm_medium'),
                'utm_campaign'  => Cookie::get('utm_campaign'),
            ];
        }

        return $data;
    }
}
