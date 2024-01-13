<?php

namespace App\Models;

use DateTimeInterface;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class VatReportItem extends Model
{
    use HasFactory;

    public $table = 'vat_report_items';

    protected $dates = [
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    protected $fillable = [
        'order_id',
        'vat_report_id',
        'version',
        'date',
        'account',
        'account_2',
        'key_amount',
        'd_a',
        'iso',
        'quantity',
        'tax_rate',
        'tax_method',
        'tax_coefficient',
        'tax_account',
        'tax_account_2',
        'tax_debit_credit',
        'text',
        'invoice_number',
        'vat_code',
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    protected function serializeDate(DateTimeInterface $date)
    {
        return $date->format('Y-m-d H:i:s');
    }

    public function order()
    {
        return $this->belongsTo(Order::class, 'order_id');
    }

    public function vat_report()
    {
        return $this->belongsTo(VatReport::class, 'vat_report_id');
    }
}
