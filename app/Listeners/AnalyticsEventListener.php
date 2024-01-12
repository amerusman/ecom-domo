<?php

namespace App\Listeners;

use App\Events\AnalyticsEvent;
use Daikazu\GA4EventTracking\GA4;

class AnalyticsEventListener
{
    /**
     * Handle the event.
     *
     * @param object $event
     * @return void
     */
    public function handle(AnalyticsEvent $event)
    {
        $product = $event->data;

        $itemData = [
            'item_id' => $product->sku??'',
            'item_name' => $product->brand->name . ' ' . $product->name,
            'currency' => 'EUR',
            'discount' => $product->discount??'',
            'price' => $product->price??'',
            'quantity' => $product->quantity??'',
        ];


        $eventData = [
            'name' => 'view_item',
            'params' => [
                'currency' => 'EUR',
                'value' => $product->price,
                'items' => [$itemData],
            ],
        ];

        $ga4 = new GA4();
        $ga4->setClientId('1231');
        $responce = $ga4->sendEvent($eventData);
        //var_dump($responce);

    }
}
