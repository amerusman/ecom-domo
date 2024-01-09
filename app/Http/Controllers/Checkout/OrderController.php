<?php

namespace App\Http\Controllers\Checkout;

use App\Actions\OrderProcessAction;
use App\Actions\OrderStoreAction;
use App\Enums\OrderStatus;
use App\Facades\Cart;
use App\Facades\CountryFacade;
use App\Helpers\SiteHelper;
use App\Http\Controllers\Controller;
use App\Http\Requests\Checkout\StoreOrderRequest;
use App\Http\Requests\Checkout\UpdateOrderRequest;
use App\Models\Order;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cookie;

class OrderController extends Controller
{
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\Checkout\StoreOrderRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreOrderRequest $request, OrderStoreAction $orderStoreAction)
    {
        $orderStoreAction->handle();

        return back();
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function show(Order $order)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function edit(Order $order)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\Checkout\UpdateOrderRequest  $request
     * @param  \App\Models\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function update(StoreOrderRequest $request, OrderProcessAction $orderProcessAction, Order $order)
    {
        $data = $orderProcessAction->handle($request);
        $order = Auth::user()->orders()->find(Cart::orderId());
        $order->update($data);

        return back();
    }
}
