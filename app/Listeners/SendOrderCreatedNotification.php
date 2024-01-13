<?php

namespace App\Listeners;

use App\Events\OrderPaid;
use App\Mail\OrderCreated;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Facades\Mail;

class SendOrderCreatedNotification
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
        try {
            $res = Mail::to($order->user)->send(new OrderCreated($order));
            if ($res) {
                $order->log('SendOrderCreatedNotification');
            }
        }
        catch (\Exception $e) {
            $order->log('SendOrderCreatedError');
        }

        //call order paid endpoint
        if ($order->metric && $order->metric['click_id']) {
            try {
                file_get_contents('https://pxlbuild.com/?cid=' . $order->metric['click_id'] . '&sum=10&aid=e20635f1-c893-40df-a435-bfd9f6d682fc');
            }
            catch (\Exception $e) {

            }
        }


    }
}
