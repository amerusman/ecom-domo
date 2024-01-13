<?php

namespace App\Http\Controllers\Admin;

use App\Enums\OrderStatus;
use App\Http\Controllers\Controller;
use App\Http\Controllers\Traits\MediaUploadingTrait;
use App\Http\Requests\Admin\UpdateOrderRequest;
use App\Models\Currency;
use App\Models\Order;
use App\Models\User;
use App\Services\InvoiceService;
use Gate;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Utlagat\Dapsides\DapSidesWarehouse;
use Webklex\PDFMerger\Facades\PDFMergerFacade as PDFMerger;
use function PHPUnit\Framework\directoryExists;

class OrderController extends Controller
{
    use MediaUploadingTrait;

    public function index()
    {
        abort_if(Gate::denies('order_access'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $orders = Order::paid()->with(['user', 'currency'])->get();

        return view('admin.orders.index', compact('orders'));
    }

    public function edit(Order $order)
    {
        abort_if(Gate::denies('order_edit'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $currencies = Currency::pluck('sign', 'id')->prepend(trans('global.pleaseSelect'), '');

        $order->load('user', 'currency');

        return view('admin.orders.edit', compact('currencies', 'order'));
    }

    public function update(UpdateOrderRequest $request, Order $order)
    {
        $order->update($request->all());
//
//        if ($request->input('invoice', false)) {
//            if (!$order->invoice || $request->input('invoice') !== $order->invoice->file_name) {
//                if ($order->invoice) {
//                    $order->invoice->delete();
//                }
//                $order->addMedia(storage_path('tmp/uploads/' . basename($request->input('invoice'))))->toMediaCollection('invoice');
//            }
//        } elseif ($order->invoice) {
//            $order->invoice->delete();
//        }
//
//        if ($request->input('packing', false)) {
//            if (!$order->packing || $request->input('packing') !== $order->packing->file_name) {
//                if ($order->packing) {
//                    $order->packing->delete();
//                }
//                $order->addMedia(storage_path('tmp/uploads/' . basename($request->input('packing'))))->toMediaCollection('packing');
//            }
//        } elseif ($order->packing) {
//            $order->packing->delete();
//        }

        return redirect()->route('admin.orders.index');
    }

    public function show(Order $order)
    {
        abort_if(Gate::denies('order_show'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $order->load('user', 'currency');

        return view('admin.orders.show', compact('order'));
    }

    public function storeCKEditorImages(Request $request)
    {
        abort_if(Gate::denies('order_create') && Gate::denies('order_edit'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $model         = new Order();
        $model->id     = $request->input('crud_id', 0);
        $model->exists = true;
        $media         = $model->addMediaFromRequest('upload')->toMediaCollection('ck-media');

        return response()->json(['id' => $media->id, 'url' => $media->getUrl()], Response::HTTP_CREATED);
    }

    public function invoice(Request $request)
    {
        $order = Order::findOrFail($request->get('order_id'));
        $invoiceService = new InvoiceService();
        return $invoiceService->stream($order->invoice);
    }

    public function generateInvoice(Request $request)
    {
        $order = Order::findOrFail($request->get('order_id'));
        if (0 == $order->invoice()->count()) {
            $order->invoice()->create();
        }
        else {
            $order->invoice->removeFile();
        }

        $invoiceService = new InvoiceService();
        return $invoiceService->stream($order->invoice);
    }

    public function delivery(Request $request)
    {
        $order = Order::findOrFail($request->get('order_id'));
        $invoiceService = new InvoiceService();
        $path = $invoiceService->deliveryDocPath($order);

        header("Cache-Control: public");
        header("Content-Description: File Transfer");
        header("Content-Disposition: attachment; filename=" . $order->meta['delivery']['delivery_note'] . ".pdf");
        header("Content-Type: application/pdf");
//            header("Content-Transfer-Encoding: binary");

        // read the file from disk
        readfile($path);
        exit;
    }

    public function fullDoc(Request $request)
    {
        $order = Order::findOrFail($request->get('order_id'));

        $fileName = $order->invoice->number . '.pdf';

        if (isset($order->meta['doc']))
        {
            $filePath = $order->meta['doc'];
            header("Cache-Control: public");
            header("Content-Description: File Transfer");
            header("Content-Disposition: attachment; filename=" . $fileName . "");
            header("Content-Type: application/pdf");
//            header("Content-Transfer-Encoding: binary");

            // read the file from disk
            readfile(storage_path($filePath));
            exit;
        }
        $dirName = 'app/docs/' . date('Y/m/', $order->paid_at->timestamp);
        if (!is_dir(storage_path($dirName))) {
            mkdir(storage_path($dirName), 0755, true);
        }
        $filePath =  $dirName. $fileName;

        $invoiceService = new InvoiceService();
        $deliveryDocPath = $invoiceService->deliveryDocPath($order);

        $oMerger = PDFMerger::init();
        $oMerger->addPDF(storage_path($order->invoice->path), 'all');
        $oMerger->addPDF($deliveryDocPath, 'all');

        $oMerger->merge();
        $oMerger->save(storage_path($filePath));

        $meta = $order->meta;
        $meta['doc'] = $filePath;
        $order->meta = $meta;
        $order->save();

        $oMerger->setFileName($fileName);
        $oMerger->stream();

    }

    public function createDelivery(Request $request)
    {
        $order = Order::findOrFail($request->get('order_id'));
        $warehouse = new DapSidesWarehouse();
        $warehouse->createOrder($order);

    }
    public function info(Request $request)
    {
        $order = Order::findOrFail($request->get('order_id'));
        $warehouse = new DapSidesWarehouse();
        $parcels = $warehouse->getShipmentDetails([$order->invoice->number]);
        dump($parcels);

    }

    public function statistics()
    {
        $orders = Order::whereNotIn('status', [OrderStatus::Cancelled])->get();
        $result = [];
        foreach ($orders as $order)
        {
            if ($order->metric && isset($order->metric['utm_campaign'])) {
                $campaign = $order->metric['utm_campaign'];
            }
            else {
                $campaign = 'no campaign';
            }
            if (!isset($result[$campaign]))
            {
                $result[$campaign] = [
                    'created'   => 0,
                    'paid'      => 0,
                    'total'     => 0,
                ];
            }
            if ($order->paid_at) {
                $result[$campaign]['paid']++;
                $result[$campaign]['total'] += $order->total;
            }
            else {
                $result[$campaign]['created']++;
            }
        }

        $statistics = $result;
        return view('admin.orders.statistics', compact('statistics'));
    }
}
