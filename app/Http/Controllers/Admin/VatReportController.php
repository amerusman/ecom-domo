<?php

namespace App\Http\Controllers\Admin;

use App\Enums\OrderStatus;
use App\Http\Controllers\Controller;
use App\Models\Order;
use App\Models\VatReport;
use App\Models\VatReportItem;
use Gate;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class VatReportController extends Controller
{
    public function index()
    {
        abort_if(Gate::denies('vat_report_access'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $vatReports = VatReport::all();

        return view('admin.vatReports.index', compact('vatReports'));
    }

    public function show(VatReport $vatReport)
    {
        abort_if(Gate::denies('vat_report_show'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return view('admin.vatReports.show', compact('vatReport'));
    }

    public function importRecords()
    {
        $orders = Order::whereIn('status', [OrderStatus::Completed, OrderStatus::Shipped])->doesntHave('vat_report_item')->orderBy('id')->get();

        $data = [];
        foreach ($orders as $order)
        {
            $data = [
                'order_id'      => $order->id,
//                'vat_report_id',
                'version'       => 'J',
                'date'          => $order->invoice->created_at->format('d.m.Y'),
                'account'       => '1092',
                'account_2'     => '3000',
                'key_amount'    => $order->total,
                'd_a'           => 'D',
                'iso'           => $order->country->currency->code,
                'quantity'      => 0,
                'tax_rate'      => $order->country->vat,
                'tax_method'    => '1',
                'tax_coefficient'   => '100',
                'tax_account'   => $order->country->tax_account,
                'tax_account_2' => '3000',
                'tax_debit_credit'  => '1',
                'text'              => 'InvoiceNumber ' . $order->invoice->number,
                'invoice_number'    => $order->invoice->number,
                'vat_code'      => $order->country->vat_code,
                'created_at'    => $order->invoice->created_at,
            ];
            VatReportItem::create($data);
        }

        dump($data);
    }

    public function generate(Request $request)
    {
        //monthly, weekly
        //from
        $month = $request->get('m');
        if(!$month) {
            return;
        }
        $from = '2023-' . $month . '-01';
        $to = '2023-' . ($month+1) . '-01';
        $records = VatReportItem::where('created_at', '>=', $from)->where('created_at', '<', $to)->get();

        if(!$records) {
            dump($from, $to, $records);
            return;
        }


        $csvFileName = 'vat_report_' . $from . '_' . $to . '.csv';
        $headers = [
            'Content-Type' => 'text/csv',
            'Content-Disposition' => 'attachment; filename="' . $csvFileName . '"',
        ];

        $handle = fopen('php://output', 'w');
        fputcsv($handle, ['N.Record', 'Version', 'Data', 'Account', 'Account2', 'KeyAmount', 'D/A', 'ISO', 'Quantity', 'TaxRate', 'TaxMethod', 'TaxCoefficient', 'TaxAccount', 'TaxAccount2', 'TaxDebitCredit', 'Text', 'InvoiceNumber', 'VatCode']); // Add more headers as needed

        foreach ($records as $record) {
            $data = [
                $record->id,
                $record->version,
                $record->date,
                $record->account,
                $record->account_2,
                $record->key_amount,
                $record->d_a,
                $record->iso,
                $record->quantity,
                $record->tax_rate,
                $record->tax_method,
                $record->tax_coefficient,
                $record->tax_account,
                $record->tax_account_2,
                $record->tax_debit_credit,
                $record->text,
                $record->invoice_number,
                $record->vat_code,

            ];
            fputcsv($handle, $data); // Add more fields as needed
        }

        fclose($handle);

        return \Illuminate\Support\Facades\Response::make('', 200, $headers);

    }

    public function send(Request $request)
    {

    }
}
