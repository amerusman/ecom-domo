<?php

namespace App\Http\Controllers\Checkout;

use App\Events\OrderPaid;
use App\Http\Controllers\Controller;
use App\Http\Requests\StorePaymentRequest;
use App\Http\Requests\UpdatePaymentRequest;
use App\Models\Order;
use App\Models\Payment;
use App\Services\PaySalsaService;
use Illuminate\Http\Request;

class PaymentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

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
     * @param  \App\Http\Requests\StorePaymentRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StorePaymentRequest $request)
    {
        $method = $request->input('payment-method');
        $result = [];
        $paySystem = new PaySalsaService();
        if (!\Cart::orderId()) {
            $result['url'] = route('checkout.index');
        }
        $order = Order::findOrFail(\Cart::orderId());
        $response = $paySystem->paymentCreate($order);
        if ($response) {
            if($response['errorCode']) {
                //dump($response);
                if (is_array($response['errorDescription'])) {
                    $result['message'] = $response['errorCode'] . ': ' . implode(' | ', $response['errorDescription']);
                }
                else {
                    $result['message'] = $response['errorCode'] . ': ' . $response['errorDescription'];
                }
            }
            else {
                if ($response['payload']) {
                    $paymentUrl = $response['payload']['paymentUrl'];
                    $result['url'] = $paymentUrl;
                    //return redirect($paymentUrl);
                }
            }
        }
        return response()->json($result);
    }

    public function webhook(Request $request)
    {
        dump($request->all());
        $paymentToken = $request->input('paymentToken');
        $payment = Payment::findOrFail($paymentToken);
        $payment->notification_type = $request->input('notificationType');
        $payment->data = $request->all();
        switch ($request->input('notificationType')) {
            case 'newSaleFailed':
                $status = 'failed';
                break;
            case 'newSaleExpired':
                $status = 'expired';
                break;
            case 'newSaleSuccess':
                $status = 'paid';
                break;
            default:
                $status = 'processed';
        }
        $payment->status = $status;
        $payment->save();

        if ('paid' == $status) {
            $payment->order->payment = $payment->data;
            $payment->order->save();
            OrderPaid::dispatch($payment->order);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Payment  $payment
     * @return \Illuminate\Http\Response
     */
    public function show(Payment $payment)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdatePaymentRequest  $request
     * @param  \App\Models\Payment  $payment
     * @return \Illuminate\Http\Response
     */
    public function update(UpdatePaymentRequest $request, Payment $payment)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Payment  $payment
     * @return \Illuminate\Http\Response
     */
    public function destroy(Payment $payment)
    {
        //
    }
}
