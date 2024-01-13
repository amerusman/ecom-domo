<?php

namespace App\Services;

use App\Models\Invoice;
use App\Models\Order;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Storage;
use PDF;
use Utlagat\Dapsides\DapSidesWarehouse;

class InvoiceService
{
    public function generate(Invoice $invoice)
    {
        $order = $invoice->order;
        $fileName = 'invoice-' . $invoice->number . '.pdf';
        $filePath = 'app/invoices/' . $fileName;

        $items = new Collection();
        foreach ($order->items as $item)
        {
            $item['price_vat_included'] = $item['amount']/$item['quantity'];
            $item['vat'] = ($item['price_vat_included'] - $item['price_vat_included'] / (1 + $order->country->vat / 100));
            $item['price_vat_excluded'] = round($item['price_vat_included'] - $item['vat'], 2);

            $items->push( (object)$item );
        }

        $order->discount_vat_excluded = number_format(round($order->discount_total - ($order->discount_total - $order->discount_total / (1 + $order->country->vat / 100)), 2), 2);
//        dd($items);

        $pdf = PDF::loadView('profile.invoice', compact('order', 'items'))
            ->save(storage_path($filePath));
//        $pdf->stream($fileName);

        return $filePath;
    }

    public function remove(Invoice $invoice): bool
    {
//        storage_path($invoice->path);
        return Storage::delete($invoice->path);
    }

    public function stream(Invoice $invoice)
    {
//        return Storage::download($invoice->path);
//        return Pdf::loadFile(storage_path($invoice->path))->stream();
//        $fdata = file_get_contents($tmppdf);
        return response()->download(storage_path($invoice->path), 'invoice-' . $invoice->number . '.pdf');
    }

//    TODO: refactor later
    public function deliveryDocPath(Order $order)
    {
        $dir = '/var/www/ftp/files';
        $files = scandir($dir);

        if (empty($order->meta['delivery']['delivery_note'])) {
            $warehouse = new DapSidesWarehouse();
            $parcels = $warehouse->getShipmentDetails([$order->invoice->number]);
            if ($parcels && !empty($parcels[0])) {
                $order->delivery('delivery_note', $parcels[0]->deliveryNote);
            }
        }

        if (empty($order->meta['delivery']['delivery_note'])) {
            return back();
        }

        $path = $dir . '/BG' . $order->meta['delivery']['delivery_note'] . '_1.PDF';
        if(!file_exists($path)){ // file does not exist
            print_r($files);
            die($path . ' file not found');
        }
        else if(!is_readable($path))
        { // file does not readable
            print_r($files);
            die($path . ' file not readable');
        }
        else {
            return $path;
        }
    }
}
