<?php

namespace Utlagat\Dapsides;

use App\Models\Country;
use App\Models\Order;
use App\Models\Product;
use Psy\Util\Json;

class DapSidesWarehouse
{
    private $api;
    public function __construct()
    {
        $this->api = new API();
    }

    protected function login()
    {

    }

    public function createOrder(Order $order)
    {
        //unpack kits
        $items = [];
        foreach ($order->items as $item)
        {
            $id = intval($item['id']);
            $product = Product::findOrFail($id);
            //if product is set of products
            if ($product->is_kit && $product->kit)
            {
                foreach ($product->kit as $kit)
                {
                    $prodFromKit = Product::find($kit['product_id']);
                    if (isset($items[$prodFromKit->id])) {
                        $items[$prodFromKit->id]['quantity'] += $kit['qty'];
                    }
                    else {
                        $items[$prodFromKit->id] = [
                            'id'    => $prodFromKit->id,
                            'sku'   => $prodFromKit->sku,
                            'name'  => $prodFromKit->name,
                            'quantity'  => $kit['qty']
                        ];
                    }
                }
            }
            else
            {
                if (isset($items[$id])) {
                    $items[$id]['quantity'] += $item['quantity'];
                }
                else {
                    $items[$id] = $item;
                }
            }
        }
        $data = [];
        $orderRowID = 1;
        $i = 1;
        foreach ($items as $item)
        {
            $data[$i++] = [
                'orderID'       => $order->invoice->number,
                'customerName'  => $order->shipping['first_name'] . ' ' . $order->shipping['last_name'],
                'destAddress'   => trim($order->shipping['address_1'] . ' ' . $order->shipping['address_2']),
                'destPostalCode'    => $order->shipping['zip'],
                'destCity'          => $order->shipping['city'],
                'destAreaCode'      => $order->shipping['state'],
                'destCountryCode'    => Country::findOrFail($order->shipping['country_id'])->short_code,
                'destPhone'     => $order->shipping['phone'],
                'destEmail'     => $order->user->email,
                'orderDate'     => $order->paid_at->format('Y-m-d'),
//                'cod'           => 1,
                'cod'           => 0,
//                'totalAmount'   => $order->total,
                'totalAmount'   => 0,
                'orderRowID'    => $orderRowID++,
                'productID'     => $item['sku'],
                'productName'   => $item['name'],
                'productQty'    => $item['quantity'],
            ];
        }
        var_dump($data);
        $orderData = Json::encode($data);
        var_dump($orderData);

        $response = $this->api->createOrder($orderData);

        if (isset($response->status)) {
            if ('success' == $response->status) {
                var_dump($response->data);
                $meta = $order->meta;
                $meta['delivery']['dap_internal_reference'] = $response->data;
                $order->meta = $meta;
                $order->save();
                $order->log('createDelivery');
            }
            else {
                echo $response->message;
                $meta = $order->meta;
                $meta['delivery']['dap'] = $response->message;
                $order->meta = $meta;
                $order->save();
            }
        }
    }

    public function editOrder()
    {

    }

    public function getProductStock()
    {
        $this->api->getProductStock();
    }

    public function getShipmentDetails($orderIds)
    {
        $result = null;
        $info = $this->api->getShipmentDetails($orderIds);
        if('success' == $info->status && $info->data) {
            $result = $info->data;
        }
        return ($result);
    }
}
