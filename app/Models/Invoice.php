<?php

namespace App\Models;

use App\Services\InvoiceService;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;


class Invoice extends Model
{
    use HasFactory;
    protected $fillable = [
        'number',
        'file',
    ];

    protected static function boot()
    {
        parent::boot();
        static::saving(function ($model) {
            $model->number = Str::upper($model->order->country->short_code) . '-' . $model->order->paid_at->format('y') . '-' . str_pad($model->order->id, 5, "0", STR_PAD_LEFT);
        });
    }

//    public function setNumberAttribute()
//    {
//        $order = $this->order();
//        $number = $order->country->short_code . '-' . $order->id;
//        $this->attributes['number'] = $number;
//    }

    public function getPathAttribute()
    {
        if (!$this->file) {
            $invoice = new InvoiceService();
            $this->file = $invoice->generate($this);
            $this->save();
        }
        return $this->file;
    }

    public function getFullPathAttribute()
    {
        return storage_path($this->path);
    }

    public function removeFile()
    {
        $invoice = new InvoiceService();
        $invoice->remove($this);
        $this->file = null;
        $this->save();
    }

    /**
     * Get the order that owns the invoice.
     */
    public function order()
    {
        return $this->belongsTo(Order::class)->with('currency');
    }
}
