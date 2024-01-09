<?php

namespace App\Models;

use \DateTimeInterface;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\Translatable\HasTranslations;

class Country extends Model
{
    use SoftDeletes;
    use HasFactory;
    use HasTranslations;

    public $table = 'countries';

    protected $dates = [
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    protected $fillable = [
        'name',
        'short_code',
        'active',
        'currency_id',
        'vat',
        'vat_code',
        'tax_account',
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    public $translatable = ['name'];

    public const CACHE_KEY = 'countries';

    public function currency()
    {
        return $this->belongsTo(Currency::class, 'currency_id');
    }

    public function languages()
    {
        return $this->belongsToMany(Language::class);
    }

    protected function serializeDate(DateTimeInterface $date)
    {
        return $date->format('Y-m-d H:i:s');
    }
}
