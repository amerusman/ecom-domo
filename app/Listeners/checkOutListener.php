<?php

namespace App\Listeners;

use App\Events\checkOutEvent;
use App\Models\Order;
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
            $orderId = $product['orderId'];
            $order = Order::where('status', 'completed')->find($orderId);

            $itemDataArray = [];
            if ($order !== null) {
                $paymentDetail = $order->payment;
                foreach ($order->items as $item) {

                    $itemData = [
                        'item_id' => $item['sku'],
                        'currency' => 'EUR',
                        'quantity' => $item['quantity'],
                    ];

                    $itemDataArray[] = $itemData;
                }


                $eventData = [
                    'name' => $eventType,
                    'params' => [
                        'currency' => 'EUR',
                        'value' => $paymentDetail['amount'],
                        'transaction_id' => $paymentDetail['id'],
                        'items' => [$itemDataArray],
                    ],
                ];
            }
        } elseif (in_array($eventType, ['add_to_cart', 'view_item', 'view_cart', 'begin_checkout'])) {
            $products = $event->cdata;
            $itemDataArray = [];
            $products_value = 0;
            foreach ($products as $product) {

                $products_value += $product->price;
                $itemData = [
                    'item_id' => $product->sku ?? '',
                    'item_name' => $product->brand->name . ' ' . $product->name,
                    'currency' => 'EUR',
                    'discount' => $product->discount ?? '',
                    'price' => $product->price ?? '',
                    'quantity' => $product->quantity ?? '',
                ];

                $itemDataArray[] = $itemData;
            }

            $eventData = [
                'name' => $eventType,
                'params' => [
                    'currency' => 'EUR',
                    'value' => $products_value ?? '',
                    'items' => [$itemDataArray],
                ],
            ];
        }
        if (!empty($eventData)) {
            $provalue = ($eventType == 'purchase') ? $eventData['params']['value'] : \Cart::total();
            $ga4 = new GA4();
            $ga4->setClientId('ss1231');
            $eventData['params']['value'] = $provalue;
            $responce = $ga4->sendEvent($eventData);
            ///var_dump($responce);
        }

        //
    }
}
