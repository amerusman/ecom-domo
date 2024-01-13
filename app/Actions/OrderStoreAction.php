<?php

namespace App\Actions;

use App\Facades\Cart;
use App\Http\Requests\Checkout\StoreOrderRequest;
use Illuminate\Support\Facades\Auth;

class OrderStoreAction
{
    private StoreOrderRequest $request;
    private OrderProcessAction $orderProcessAction;

    public function __construct(StoreOrderRequest $request, OrderProcessAction $orderProcessAction)
    {
        $this->request = $request;
        $this->orderProcessAction = $orderProcessAction;
    }
    public function handle()
    {
        $data = $this->orderProcessAction->handle($this->request);
        $order = Auth::user()->orders()->create($data);
        Cart::orderId($order->id);

        //call order created endpoint
        if ($order->metric && $order->metric['click_id']) {
            try {
//                file_get_contents('https://pxlbuild.com/?cid=' . $order->metric['click_id'] . '&sum=0&aid=e20635f1-c893-40df-a435-bfd9f6d682fc');
                file_get_contents('https://pxlbuild.com/reg.aspx?cid=' . $order->metric['click_id'] . '');
            }
            catch (\Exception $e) {

            }
        }
    }
}
