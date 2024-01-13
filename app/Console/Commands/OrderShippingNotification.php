<?php

namespace App\Console\Commands;

use App\Enums\OrderStatus;
use App\Mail\OrderShipped;
use App\Models\Invoice;
use App\Models\Order;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\URL;
use Utlagat\Dapsides\DapSidesWarehouse;

class OrderShippingNotification extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'notification:shipping';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Check if order is shipped';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $orders = Order::where('status', OrderStatus::Processing)->paid()->has('invoice')->get()->pluck('number')->toArray();
        if (!$orders) {
            $this->info('No processing orders');
            return Command::SUCCESS;
        }

        $warehouse = new DapSidesWarehouse();
        $parcels = $warehouse->getShipmentDetails($orders);
        if ($parcels)
        {
            foreach ($parcels as $parcel)
            {
                $parcel->orderID;
//                dump($parcel->status);
                $order = Invoice::where('number', $parcel->orderID)->first()->order;
                if ($order)
                {
                    if ( in_array($parcel->status, ['ON DELIVERY', 'DELIVERED', 'ABROAD FORWARDED']) && OrderStatus::Processing == $order->status)
                    {
                        $mailData = [
//                            'tracking_number'   => $parcel->trackingNumber,
                            'tracking'   => $parcel->tracking,
                        ];
                        /*set lang form emails*/
                        $lang = $order->user->preferredLocale();
                        app()->setLocale($lang);
                        URL::defaults(['locale' => $lang]);

                        $res = Mail::to($order->user)->send(new OrderShipped($order, $mailData));
                        if ($res)
                        {
                            $order->log('SendOrderShippedNotification');
                            if (isset($parcel->deliveryNote)) {
                                $order->delivery('delivery_note', $parcel->deliveryNote);
                            }
                            $order->status = OrderStatus::Shipped;
                            $order->save();
                        }
                    }
                    $this->line('Processing oder: ' . $order->number);
                }
            }
        }

        return Command::SUCCESS;
    }
}
