<?php

namespace App\Console\Commands;

use App\Enums\OrderStatus;
use App\Mail\OrderShipped;
use App\Models\Invoice;
use App\Models\Order;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Mail;
use Utlagat\Dapsides\DapSidesWarehouse;

class OrderCompletedNotification extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'notification:delivered';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Check if order is delivered by company';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $orders = Order::where('status', OrderStatus::Shipped)->paid()->has('invoice')->get()->pluck('number')->toArray();
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
                $order = Invoice::where('number', $parcel->orderID)->first()->order;
                if ($order)
                {
                    if ('DELIVERED' == $parcel->status)
                    {
                        $order->log('OrderCompletedNotification');
                        $order->status = OrderStatus::Completed;
                        $order->save();
                    }
                    else if ('RETURNED' == $parcel->status)
                    {
                        $order->log('OrderReturnedNotification');
                        $order->status = OrderStatus::Returned;
                        $order->save();
                    }
                    $this->line('Processing oder: ' . $order->number);
                }
            }
        }
        return Command::SUCCESS;
    }
}
