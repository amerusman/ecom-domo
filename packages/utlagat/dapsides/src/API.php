<?php

namespace Utlagat\Dapsides;

use Illuminate\Support\Facades\Cache;

class API
{
    private $_token;
    protected $user;
    protected $pass;
    protected $url;

    public function __construct()
    {
        $this->user = env('DAPSIDES_USERNAME');
        $this->pass = env('DAPSIDES_PASSWORD');

        $this->url = 'http://62.97.45.44:443/webapp';
        $this->url = 'https://cloud.dapsides.it/webappdev';

        if (empty($this->_token))
        {
            $this->_token = Cache::remember('dapsides_api_token', 12*60*60, function () {
                return $this->login();
            });
        }
    }

    protected function login()
    {
        $endPoint = "/api/v3/createToken.php/process/" . $this->user . "/" . $this->pass;

        $url = $this->url . $endPoint;
//        dump($url);
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_VERBOSE, 1);
        curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));
        curl_setopt( $ch, CURLOPT_CUSTOMREQUEST, 'GET' );

        if (curl_errno($ch)) {
            echo curl_errno($ch);
            echo curl_error($ch);
            $status = array("status" => "error", "msg" => "Login Error");
            dd($status);
            return false;
        }else{
            $result = curl_exec($ch);
            $response = json_decode($result);
            curl_close($ch);
            $this->_token = $response->csrf_value;
            return $this->_token;
        }

    }

    public function createOrder($data)
    {
        $endPoint = '/api/index.php/insertorder';

        $url = $this->url . $endPoint;
        $token = $this->_token;

        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_VERBOSE, 1);
        curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
        curl_setopt($ch, CURLOPT_POST, 1);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json','Authorization: '.$token));
        curl_setopt($ch, CURLOPT_POSTFIELDS, $data);

        if (curl_errno($ch)) {
            echo curl_errno($ch);
            echo curl_error($ch);
        }else{
            $result = curl_exec($ch);
            $response = json_decode( $result );
            echo $result;
            curl_close($ch);

            return $response;
        }
    }

    public function editOrder()
    {

    }

    public function getProductStock()
    {
        $endPoint = '/api/index.php/getqtyproduct';

        $url = $this->url . $endPoint;
        $data = '{"item":""}';
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt( $ch, CURLOPT_CUSTOMREQUEST, 'GET' );
        curl_setopt($ch, CURLOPT_VERBOSE, 1);
        curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
        curl_setopt($ch, CURLOPT_POST, 0);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json','Authorization: '.$this->_token));
        curl_setopt($ch, CURLOPT_POSTFIELDS, $data);

        if (curl_errno($ch)) {
            echo curl_errno($ch);
            echo curl_error($ch);
            $status = array("status" => "error", "msg" => "Product not found");
        } else {
            $result = curl_exec($ch);
            curl_close($ch);
            $response = json_decode( $result );
            $tt = array();
            $i=1;
            dump($response);
            echo $result;
        }
    }

    public function getShipmentDetails(array $orderIds)
    {
        $endPoint="/api/index.php/getShipmentDetails/?orderIDs=" . implode(',', $orderIds);

        $url = $this->url . $endPoint;
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt( $ch, CURLOPT_CUSTOMREQUEST, 'GET' );
        curl_setopt($ch, CURLOPT_VERBOSE, 1);
        curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
        curl_setopt($ch, CURLOPT_POST, 0);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type:  application/json','Authorization: '.$this->_token));
//        curl_setopt($ch, CURLOPT_POSTFIELDS, $data);

        if (curl_errno($ch)){
            echo curl_errno($ch);
            echo curl_error($ch);
            $status = array("status" => "error", "msg" => "Shipment not found");
        }else{
            $result = curl_exec($ch);
            curl_close($ch);
            $response = json_decode( $result );
            return $response;
        }
    }
}
