<?php

namespace App\Http\Controllers;

use App\Enums\OrderStatus;
use App\Events\OrderPaid;
use App\Facades\Cart;
use App\Helpers\SiteHelper;
use App\Models\Address;
use App\Models\Order;
use App\Models\Product;
use App\Services\PaySalsaService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Stripe\Exception\ApiErrorException;
use Stripe\PaymentIntent;
use Stripe\Stripe;

class CheckoutController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $cart = \Cart::content();

        $products = \Cart::products();
        if (0 == $products->count()) {
            return view('cart.index', compact('products'));
        }

        $total = \Cart::totalValue();

        $vatPerc = SiteHelper::country()->vat;
        $vat = round($total - $total/(1+$vatPerc/100), 2);
        $subtotal = $total - $vat;

        if (Auth::check()) {
            $address = Auth::user()->addresses()->default()->firstOrNew();
        }
        else {
            $address = new Address;
            $address->country_id = SiteHelper::country()->id;
        }
        $shipping = null;

        if (\Cart::orderId())
        {
            $order = Order::findOrFail(\Cart::orderId());
            if ($order->status == OrderStatus::Processing) {
                \Cart::clear();
                return redirect(route('checkout.index'));
            }
            $order->total = $total;
            $order->sub_total = \Cart::subtotal();
            $order->shipping_total = \Cart::deliveryCost();
            $order->tax_total = \Cart::vatValue();
            if (\Cart::discountCoupon()) {
                $order->discount_total = \Cart::discountCoupon();
                $coupon = \Cart::getCoupon();
                $order->discount_breakdown = [
                    [
                        'coupon_id' => $coupon->id,
                        'code' => $coupon->code,
                        'discount' => $coupon->discount,
                    ]
                ];

            }
            $order->items = Cart::products()->map(function ($item, $key) {
                return [
                    'id' => $item['id'],
                    'sku' => $item['sku'],
                    'quantity' => $item['quantity'],
                    'amount' => $item['amount'],
                    'name' => $item['name'],
                    ];
            })->toArray();
            $order->save();

            $address = (object) $order->billing;
            if ($order->billing != $order->shipping) {
                $shipping = (object) $order->shipping;
            }

            Stripe::setApiKey(env('STRIPE_SECRET'));
            // Create a PaymentIntent with amount and currency
            try {
                $paymentIntent = PaymentIntent::create([
                    'amount' => intval($order->total * 100),
                    'currency' => $order->currency->code,
                    'automatic_payment_methods' => [
                        'enabled' => true,
                    ],
//                    'customer'  => $order->user->id,
                    'metadata'  => [
                        'order_id'  => $order->id
                    ]
                ]);
                $clientSecret = $paymentIntent->client_secret;
            }
            catch (ApiErrorException $e) {
                http_response_code(400);
                dump($e->getError()->message);
                error_log($e->getError()->message);
                exit();
            } catch (Exception $e) {
                error_log($e);
                http_response_code(500);
                exit;
            }
            /*
            $paySystem = new PaySalsaService();
            $paymentMethods = $paySystem->getPaymentMethods(Auth::user()->id, SiteHelper::countryCode(), Auth::user()->created_at);
            */
        }
        else {
            $order = null;
            $clientSecret = null;
        }

        return view('checkout.index', compact('products', 'cart', 'subtotal', 'total', 'vat', 'address', 'shipping', 'order', 'clientSecret'));
    }

    public function success()
    {
        $orderId = \Cart::orderId();
        if (request()->get('payment_intent')) {
            $stripe = new \Stripe\StripeClient([
                'api_key' => env('STRIPE_SECRET')
            ]);
            // Returning after redirecting to a payment method portal.
            $paymentIntent = $stripe->paymentIntents->retrieve(
                $_GET['payment_intent'],
            );
            $orderId = $paymentIntent->metadata['order_id'];
        }
        \Cart::clear();

        /*
            <p>ID <?= $paymentIntent->id; ?></p>
            <p>Status: <?= $paymentIntent->status; ?></p>
            <p>Amount: <?= $paymentIntent->amount; ?></p>
            <p>Currency: <?= $paymentIntent->currency; ?></p>
            <p>Payment Method: <?= $paymentIntent->payment_method; ?></p>
         */

        return view('checkout.success', compact('orderId'));
    }

    public function failure()
    {
        return view('checkout.failure');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        /*
        if (\Cart::orderId()) {
            dump(\Cart::orderId());
            $order = Order::findOrFail(\Cart::orderId());
            \Cart::clear();
            OrderPaid::dispatch($order);
        }
        //*/
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        return back();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

}
