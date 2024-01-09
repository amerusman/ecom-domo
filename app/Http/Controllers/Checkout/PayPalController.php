<?php

namespace App\Http\Controllers\Checkout;

use App\Events\OrderPaid;
use App\Http\Controllers\Controller;
use App\Models\Order;
use App\Models\Payment;
use Illuminate\Http\Request;
use Srmklive\PayPal\Services\PayPal;

class PayPalController extends Controller
{
    public function handlePayment(Request $request)
    {
        $order = Order::findOrFail(\Cart::orderId());
        $items = [];

        foreach ($order->items as $item) {
            $items[] = [
                'name'  => $item['name'],
                'quantity'  => $item['quantity'],
                'sku'  => $item['sku'],
                'unit_amount'  => [
                    "currency_code" => $order->currency->code,
                    "value" => $item['amount']/$item['quantity']
                ],
                'category'  => 'PHYSICAL_GOODS',
            ];
        }

        $provider = new PayPal();
        $provider->setApiCredentials(config('paypal'));
        $paypalToken = $provider->getAccessToken();
        $response = $provider->createOrder([
            "intent" => "CAPTURE",
            "application_context" => [
                "return_url" => route('checkout.success.payment'),
                "cancel_url" => route('checkout.cancel.payment'),
            ],
            "purchase_units" => [
                0 => [
//                    'invoice_id'    => $order->invoice->number,
                    'reference_id' => $order->id,
                    'custom_id' => $order->id,
//                    'items' => $items,
                    "amount" => [
                        "currency_code" => $order->currency->code,
                        "value" => $order->total
                    ]
                ]
            ]
        ]);
//        dd($items, $response);
        if (isset($response['id']) && $response['id'] != null) {

            foreach ($response['links'] as $links) {
                if ($links['rel'] == 'approve') {
                    return redirect()->away($links['href']);
                }
            }
            return redirect()
                ->route('checkout.failure')
                ->with('error', 'Something went wrong.');
        } else {
            return redirect()
                ->route('checkout.failure')
                ->with('error', $response['message'] ?? 'Something went wrong.');
        }
    }

    public function paymentCancel()
    {
        return redirect()
            ->route('checkout.failure')
            ->with('error', $response['message'] ?? 'You have canceled the transaction.');
    }

    public function paymentSuccess(Request $request)
    {
        $provider = new PayPal;
        $provider->setApiCredentials(config('paypal'));
        $provider->getAccessToken();
        $response = $provider->capturePaymentOrder($request['token']);
        if (isset($response['status']) && $response['status'] == 'COMPLETED')
        {
            if ($response['purchase_units'] && $response['purchase_units'][0])
            {
                $paymentData = $response['purchase_units'][0];
                $orderId = $paymentData['reference_id'];

                $order = Order::findOrFail($orderId);
//                $order = Order::findOrFail(7);
                $payment = Payment::create([
                    'status'    => 'paid',
                    'data'      =>  $response,
                    'order_id'  => $order->id,
                    'user_id'   => $order->user_id,
                    'country_id'   => $order->country_id,
                    'name'      => 'PayPal',
                    'token'     => $response['id'],
                    'amount'    => $paymentData['payments']['captures'][0]['amount']['value'],
                    'currency_id'    => $order->currency_id,
                    'ip'        => request()->ip()
                ]);
                // Then define and call a method to handle the successful payment intent.
                // handlePaymentIntentSucceeded($paymentIntent);
                $payment->order->payment = $payment->data;
                $payment->order->save();
                OrderPaid::dispatch($payment->order);
//                dd($response['purchase_units']);

                return redirect()
                    ->route('checkout.success')
                    ->with('success', 'Transaction complete.');
            }
        }
        else {
            return redirect()
                ->route('checkout.failure')
                ->with('error', $response['message'] ?? 'Something went wrong.');
        }
    }
}
