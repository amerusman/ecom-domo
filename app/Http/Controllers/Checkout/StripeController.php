<?php

namespace App\Http\Controllers\Checkout;

use App\Events\OrderPaid;
use App\Http\Controllers\Controller;
use App\Models\Order;
use App\Models\Payment;
use Illuminate\Http\Request;
use Stripe\Stripe;

class StripeController extends Controller
{
    public function webhook(Request $request)
    {
//        var_dump($request->all());

        // The library needs to be configured with your account's secret key.
// Ensure the key is kept out of any version control system you might be using.
        Stripe::setApiKey(env('STRIPE_SECRET'));

// This is your Stripe CLI webhook secret for testing your endpoint locally.
        $endpoint_secret = env('STRIPE_WEBHOOK_SECRET');
//        $endpoint_secret = 'whsec_SLhaCXLbsyOAhAtjoGZghU001kGOudAS';

        $payload = @file_get_contents('php://input');
        $event = null;

        try {
            $event = \Stripe\Event::constructFrom(
                json_decode($payload, true)
            );
        } catch(\UnexpectedValueException $e) {
            // Invalid payload
            echo '⚠️  Webhook error while parsing basic request.';
            http_response_code(400);
            exit();
        }
        if ($endpoint_secret) {
            // Only verify the event if there is an endpoint secret defined
            // Otherwise use the basic decoded event
            $sig_header = $_SERVER['HTTP_STRIPE_SIGNATURE'];
            try {
                $event = \Stripe\Webhook::constructEvent(
                    $payload, $sig_header, $endpoint_secret
                );
            } catch(\Stripe\Exception\SignatureVerificationException $e) {
                // Invalid signature
                echo '⚠️  Webhook error while validating signature.';
                http_response_code(400);
                exit();
            }
        }

// Handle the event
        switch ($event->type) {
            case 'payment_intent.succeeded':
                $paymentIntent = $event->data->object; // contains a \Stripe\PaymentIntent
//            var_dump($paymentIntent->metadata['order_id'], $request->input('data.object'), $paymentIntent);
                $order = Order::findOrFail($paymentIntent->metadata['order_id']);
//                $order = Order::findOrFail(7);
                $payment = Payment::create([
                    'status'    => 'paid',
                    'data'      =>  $request->input('data.object'),
                    'order_id'  => $order->id,
                    'user_id'   => $order->user_id,
                    'country_id'   => $order->country_id,
                    'name'      => 'stripe',
                    'token'     => $paymentIntent->id,
                    'amount'    => $paymentIntent->amount,
                    'currency_id'    => $order->currency_id,
                    'ip'        => request()->ip()
                ]);
                // Then define and call a method to handle the successful payment intent.
                // handlePaymentIntentSucceeded($paymentIntent);
                $payment->order->payment = $payment->data;
                $payment->order->save();
                OrderPaid::dispatch($payment->order);
                break;
            case 'payment_intent.processing':
                $paymentMethod = $event->data->object; // contains a \Stripe\PaymentMethod
                // Then define and call a method to handle the successful attachment of a PaymentMethod.
                // handlePaymentMethodAttached($paymentMethod);
                break;
            case 'payment_intent.payment_failed':
                $paymentIntent = $event->data->object; // contains a \Stripe\PaymentIntent
                // Then define and call a method to handle the successful attachment of a PaymentMethod.
                // handlePaymentMethodAttached($paymentMethod);
                $order = Order::findOrFail($paymentIntent->metadata['order_id']);
                $payment = Payment::create([
                    'status'    => 'failed',
                    'data'      =>  $request->input('data.object'),
                    'order_id'  => $order->id,
                    'user_id'   => $order->user_id,
                    'country_id'   => $order->country_id,
                    'name'      => 'stripe',
                    'token'     => $paymentIntent->id,
                    'amount'    => $paymentIntent->amount,
                    'currency_id'    => $order->currency_id,
                    'ip'        => request()->ip()
                ]);
                break;
            default:
                // Unexpected event type
                error_log('Received unknown event type');
        }

        http_response_code(200);
    }
}
