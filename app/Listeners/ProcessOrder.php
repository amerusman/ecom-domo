<?php

namespace App\Listeners;

use App\Enums\OrderStatus;
use App\Events\OrderPaid;
use Carbon\Carbon;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class ProcessOrder
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  \App\Events\OrderPaid  $event
     * @return void
     */
    public function handle(OrderPaid $event)
    {
        $order = $event->order;
        $order->status = OrderStatus::Processing;
        $order->paid_at = Carbon::now();
        $order->save();

        //create invoice
        if (0 == $order->invoice()->count()) {
            $order->invoice()->create();
        }

//        \Cart::clear();
    }
}
