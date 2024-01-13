<?php

namespace App\Models;

use App\Enums\OrderStatus;
use \DateTimeInterface;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

class Order extends Model implements HasMedia
{
    use SoftDeletes;
    use InteractsWithMedia;
    use HasFactory;

    public const STATUS_SELECT = [
        'pending'        => 'Pending payment',
        'processing'     => 'Processing',
        'on-hold'        => 'On hold',
        'completed'      => 'Completed',
        'cancelled'      => 'Cancelled',
        'refunded'       => 'Refunded',
        'failed'         => 'Failed',
        'cancel-request' => 'Cancel Request',
    ];

    public $table = 'orders';

    protected $appends = [
        'invoice',
        'packing',
    ];

    protected $dates = [
        'paid_at',
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    protected $fillable = [
        'status',
        'user_id',
        'billing',
        'shipping',
        'payment',
        'total',
        'currency_id',
        'country_id',
        'items',
        'paid_at',
        'created_at',
        'updated_at',
        'deleted_at',
        'sub_total',
        'discount_breakdown',
        'discount_total',
        'shipping_total',
        'tax_breakdown',
        'tax_total',
        'meta',
        'metric',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array
     */
    protected $casts = [
        'billing'   => 'array',
        'shipping'  => 'array',
        'payment'   => 'array',
        'items'     => 'array',
        'discount_breakdown' => 'array',
        'tax_breakdown' => 'array',
        'meta'      => 'array',
        'metric'    => 'array',
        'status'    => OrderStatus::class,
    ];

    public function registerMediaConversions(Media $media = null): void
    {
        $this->addMediaConversion('thumb')->fit('crop', 50, 50);
        $this->addMediaConversion('preview')->fit('crop', 120, 120);
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function currency()
    {
        return $this->belongsTo(Currency::class, 'currency_id');
    }

    public function country()
    {
        return $this->belongsTo(Country::class);
    }

    public function payments()
    {
        return$this->hasMany(Payment::class);
    }
    public function paymentRow()
    {
        return$this->hasOne(Payment::class)->ofMany([], function ($query) {
            $query->where('status', 'paid');
        });
    }

    /**
     * Get the invoice associated with the order.
     */
    public function invoice()
    {
        return $this->hasOne(Invoice::class);
    }

    public function vat_report_item()
    {
        return $this->hasOne(VatReportItem::class);
    }

    public function setPaidAtAttribute($value)
    {
        $this->attributes['paid_at'] = $value ? Carbon::createFromFormat(config('panel.date_format') . ' ' . config('panel.time_format'), $value)->format('Y-m-d H:i:s') : null;
    }

    public function getPackingAttribute()
    {
        return $this->getMedia('packing')->last();
    }

    public function getBillingAddressAttribute($value)
    {
        if ($this->billing) {
            $result = $this->billing['city'];
        }
        else {
            $result = null;
        }
        return $result;
    }
    public function getShippingAddressAttribute($value)
    {
        if ($this->shipping) {
            $result = Country::findOrFail($this->shipping['country_id'])->name . ', ' .
                $this->shipping['state'] . ', ' .
                $this->shipping['city'] . ', ' .
                $this->shipping['zip'] . ', ' .
                $this->shipping['address_1'] . ', ' .
                (isset($this->shipping['address_2']) ? $this->shipping['address_2'] . ', ' : '') .
                $this->shipping['first_name'] . ' ' . $this->shipping['last_name'];
        }
        else {
            $result = null;
        }
        return $result;
    }

    public function getItemsListAttribute()
    {
        if ($this->items)
        {
            $items = collect($this->items)->map(function($row) {
                return (object) $row;
            });
            $products = Product::whereIn('id', $items->pluck('id'))->get()->keyBy('id');

            foreach ($items as $key => $item) {
                $item->name =$products[$item->id]->name;
                $items->put($key, $item);
            }

            return $items;
        }
        else {
            return null;
        }
    }

    public function getNumberAttribute()
    {
        return $this->invoice->number;
    }

    public function getPaymentMethodAttribute()
    {
        return $this->paymentRow ? $this->paymentRow->name : null;
    }

    protected function serializeDate(DateTimeInterface $date)
    {
        return $date->format('Y-m-d H:i:s');
    }

    public function log($stage)
    {
        $meta = $this->meta;
        $meta['log'][] = $stage;
        $this->meta = $meta;
        $this->save();
    }

    public function delivery($key, $value)
    {
        $meta = $this->meta;
        $meta['delivery'][$key] = $value;
        $this->meta = $meta;
        $this->save();
    }


    /**
     * Scope a query to only include paid orders.
     *
     * @param \Illuminate\Database\Eloquent\Builder $query
     * @return void
     */
    public function scopePaid($query): void
    {
        $query->whereNotNull('paid_at');
    }
}
