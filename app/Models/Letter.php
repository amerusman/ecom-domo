<?php

namespace App\Models;

use \DateTimeInterface;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\Translatable\HasTranslations;

class Letter extends Model
{
    use HasFactory;
    use HasTranslations;

    public const FOOTER_TEMPLATE = 'email-footer';

    public $table = 'letters';

    protected $dates = [
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    protected $fillable = [
        'name',
        'slug',
        'subject',
        'body',
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    public $translatable = ['subject', 'body'];

    protected function serializeDate(DateTimeInterface $date)
    {
        return $date->format('Y-m-d H:i:s');
    }
}
