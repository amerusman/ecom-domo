<?php

namespace App\Services;

use App\Models\Order;
use App\Models\Payment;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Str;

class PaySalsaService
{
    const DEFAULT_INSTANCE = 'payments';

    protected $api = 'https://test-api.paysalsa.com';
    protected $listId;

    private $data;

    public function __construct()
    {
        $this->listId = '6f4cd31c-bf1f-47f1-912b-a26322d41775';
    }

    public function getPaymentMethods($payerId, $country, $registrationDate = null)
    {
        $endpoint = '/api/PaymentMethods/List';
        $data = [
            'ListId'    => $this->listId,
            'PayerId'   => $payerId,
            'Country'   => $country,
            'RegistrationDate'  => $registrationDate ? $registrationDate->timestamp : null,
        ];

        $response = Http::get($this->api . $endpoint, $data);
//        dump($response->status(), $response->reason(), $response->body(), $response->json());
        if (200 == $response->status() && $response->json()) {
            $paymentMethods = $response->json()['payload'];
            $result = [];
            foreach ($paymentMethods as $method) {
                $result[Str::slug($method['paymentSystemName'])] = $method;
            }
        }
        else {
            $result = null;
        }

        /*
        $result = [
            'bank-card' =>
            [
                "ruleToken" => "7bb8e5a0-7dc5-4b3f-8c86-39400ef3be29",
                "paymentSystemName" => "Bank Card",
                "logoUrl" => "https://test-api.paysalsa.com/api/PaymentMethods/Logo/MastercardVisa.svg",
                "paymentProviderName" => "Mesaverde",
                "expectedPaymentData" => "CardInfoRequired",
                "cardInfoRequired" => true,
            ],
            'google-pay' =>
            [
                "ruleToken" => "44c46cd2-f12c-4625-b688-976cb6917159",
                "paymentSystemName" => "Google Pay",
                "logoUrl" => "https://test-api.paysalsa.com/api/PaymentMethods/Logo/GooglePay.svg",
                "paymentProviderName" => "Mesaverde",
                "expectedPaymentData" => "None",
                "cardInfoRequired" => false,
            ],
            'apple-pay' =>
            [
                "ruleToken" => "b02cbb9a-8a4b-4d39-be53-5586744ef2e4",
                "paymentSystemName" => "Apple Pay",
                "logoUrl" => "https://test-api.paysalsa.com/api/PaymentMethods/Logo/ApplePay.svg",
                "paymentProviderName" => "Mesaverde",
                "expectedPaymentData" => "None",
                "cardInfoRequired" => false,
            ]
        ];
        */

        session()->put(self::DEFAULT_INSTANCE, $result);

        return $result;
    }

    public function paymentCreate(Order $order)
    {
        $endpoint = '/api/Payment/Create';

        $method = request()->input('payment-method');
        $paymentMethods = session()->get(self::DEFAULT_INSTANCE);
        $paymentMethod = $paymentMethods[$method];
        $payment = Payment::create([
            'status'    => 'pending',
            'order_id'  => $order->id,
            'user_id'   => $order->user_id,
            'country_id'   => $order->country_id,
            'name'    => $paymentMethod['paymentSystemName'],
            'token'     => $paymentMethod['ruleToken'],
            'amount'    => $order->total,
            'currency_id'    => $order->currency_id,
            'ip'        => request()->ip()
        ]);
        $payer = [
            'PayerID'   => $order->user->id,
            'RegistrationDate'  => $order->user->created_at ? $order->user->created_at->timestamp : null,
        ];
        $payerAttributes = [
            'Email' =>  $order->user->email,
            'PostalCode'    => $order->shipping['zip'],
            'Country'       => $order->country->short_code
        ];
        $payerEnvironment = [
            'IPv4'  => request()->ip(),
        ];
        $paymentDetails = [
            'PaymentMethodRuleToken'    => $paymentMethod['ruleToken'],
            'ProductName'   => 'order #' . $order->id,
            'ProductID'     => $order->id,
            'Currency'      => $order->currency->code,
            'InitialAmount'      => $order->total,
            'ReturnUrl'     => route('checkout.success'),
            'FailureUrl'    => route('checkout.failure'),
            'NotificationUrl'   => route('payments.webhook'),
        ];
        if ($paymentMethod['cardInfoRequired']) {
            $cardInfo = $this->prepareCardInfo();
        }
        else {
            $cardInfo = null;
        }

        $data = [
            'Payer' => $payer,
            'PayerAttributes'   => $payerAttributes,
            'PayerEnvironment'  => $payerEnvironment,
            'PaymentDetails'    => $paymentDetails,
            'PaymentToken'      => $payment->id
        ];

        if($cardInfo) {
            $data['CardInfo'] = $cardInfo;
        }
//        dd($data);
        $response = Http::post($this->api . $endpoint, $data);
        return $response->json();
        /*
        if (200 == $response->status()) {
            return $response->json();
        }
        else {
            dump($response->status(), $response->reason(), $response->body(), $response->json());
        }
        */
    }

    protected function prepareCardInfo()
    {
        $cardInfo = [
            'HolderName'    => request()->input('holder'),
            'Number'        => str_replace(' ', '', request()->input('card-number')),
            'Cvv'           => request()->input('cvv'),
            'Expiry'        => str_replace([' ', '/'], '', request()->input('expiration')), //MMYY
        ];

        return $cardInfo;
    }

    public function paymentSend()
    {

    }
}
