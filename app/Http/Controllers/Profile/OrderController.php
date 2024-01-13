<?php

namespace App\Http\Controllers\Profile;

use App\Enums\OrderStatus;
use App\Http\Controllers\Controller;
use App\Mail\OrderCreated;
use App\Mail\OrderShipped;
use App\Models\Invoice;
use App\Models\Order;
use App\Services\InvoiceService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
use Utlagat\Dapsides\DapSidesWarehouse;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $user = Auth::user();
        $orders = $user->orders()->paid()->with('country')->with('currency')->get();
        return view('profile.orders.index', compact('orders'));
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
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function show(Order $order)
    {
        if (0 == $order->invoice()->count()) {
            $order->invoice()->create();
        }

        $warehouse = new DapSidesWarehouse();
        $parcels = $warehouse->getShipmentDetails(['DE-23-00165']);
        dd($parcels);

/*
        $warehouse = new DapSidesWarehouse();
        $parcels = $warehouse->getShipmentDetails([$order->invoice->number]);
        if ($parcels) {
            foreach ($parcels as $parcel)
            {
                $parcel->orderID;
                $order = Invoice::where('number', $parcel->orderID)->first()->order;
                if ($order) {
//                    if ('ON DELIVERY' == $parcel->status && OrderStatus::Processing == $order->status)
                    if ($parcel->status)
                    {
                        $mailData = [
                            'tracking_number'   => $parcel->trackingNumber,
                            'tracking'   => $parcel->tracking,
                        ];
                        $res = Mail::to($order->user)->send(new OrderShipped($order, $mailData));
                        if ($res) {
                            $order->log('SendOrderShippedNotification');
                            $order->status = OrderStatus::Shipped;
                            $order->save();
                        }
                    }
                }
                dd($parcel->orderID, $parcels, $order);
            }
        }
        */
        /*
//        dump($order);
        if (0 == $order->invoice()->count()) {
            $order->invoice()->create();
        }
//        mkdir(storage_path('app/invoices'));
        Mail::to($order->user)->send(new OrderCreated($order));
        Mail::to($order->user)->send(new OrderShipped($order, ['tracking_number' => 123, 'tracking' => 123]));
        return ($order->invoice->path);

//        $is = new InvoiceService();
//        return $is->stream($order->invoice);
        //return view('profile.invoice', compact('order'));

//        dump($order);
//        $warehouse = new DapSidesWarehouse();
//        $warehouse->getProductStock();
//        $warehouse->createOrder($order);
        //*/
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function edit(Order $order)
    {
        $warehouse = new DapSidesWarehouse();
        $warehouse->getShipmentDetails('it-23-00078');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Order $order)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function destroy(Order $order)
    {
        //
    }
}
