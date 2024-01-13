<?php

namespace App\Models;

use \DateTimeInterface;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Address extends Model
{
    use SoftDeletes;
    use HasFactory;

    public const TYPE_SELECT = [
        'billing'  => 'Billing address',
        'shipping' => 'Shipping address',
    ];

    public $table = 'addresses';

    protected $dates = [
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    protected $fillable = [
        'user_id',
        'default',
        'type',
        'country_id',
        'state',
        'city',
        'first_name',
        'last_name',
        'company',
        'address_1',
        'address_2',
        'zip',
        'phone',
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function country()
    {
        return $this->belongsTo(Country::class, 'country_id');
    }

    /**
     * Scope a query to only include default address.
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @return void
     */
    public function scopeDefault($query)
    {
        $query->where('default', 1);
    }

    protected function serializeDate(DateTimeInterface $date)
    {
        return $date->format('Y-m-d H:i:s');
    }
}
