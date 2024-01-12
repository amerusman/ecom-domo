<?php

namespace App\Listeners;

use App\Events\checkOutEvent;
use Daikazu\GA4EventTracking\GA4;

class checkOutListener
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
     * @param object $event
     * @return void
     */
    public function handle(checkOutEvent $event)
    {

        $eventType = $event->eventType;
        $eventData = [];

        if ($eventType == 'purchase') {
            $product = $event->cdata;
            $eventData = [
                'name' => $eventType,
                'params' => [
                    'currency' => 'Euro',
                    'value' => $product['paymentamount'],
                    'transaction_id' => $product['paymentIntentId'],
                    'items' => [],
                ],
            ];
        } elseif (in_array($eventType, ['add_to_cart', 'view_item','view_cart','begin_checkout'])) {
            $product = $event->cdata[0];

            $itemData = [
                'item_id' => $product->brand_id,
                'item_name' => $product->brand->name . ' ' . $product->name,
                'currency' => 'USD', // You may want to use the actual currency property of $product if available
                'discount' => $product->discount,
                'price' => $product->price,
                'quantity' => $product->in_stock,
            ];

            $eventData = [
                'name' => $eventType,
                'params' => [
                    'currency' => 'Euro', // You may want to use the actual currency property of $product if available
                    'value' => $product->price,
                    'items' => [$itemData],
                ],
            ];
        }

// Common settings for all event types
        if (!empty($eventData)) {
            $provalue = ($eventType == 'purchase') ? $eventData['params']['value'] : \Cart::total();
            $ga4 = new GA4();
            $ga4->setClientId('ss1231');
            $eventData['params']['value'] = $provalue;
            $responce = $ga4->sendEvent($eventData);
            //var_dump($responce);
        }

        //
    }
}
