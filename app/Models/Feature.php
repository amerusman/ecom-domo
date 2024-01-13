<?php

namespace App\Models;

use \DateTimeInterface;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\Translatable\HasTranslations;

class Feature extends Model
{
    use HasFactory;
    use HasTranslations;

    public const TYPE_SELECT = [
        'text'     => 'Text',
        'number'   => 'Number',
        'select'   => 'Select',
        'checkbox' => 'Checkbox',
    ];

    public $table = 'features';

    protected $fillable = [
        'key',
        'name',
        'type',
        'options',
        'unit',
    ];

    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    public $translatable = ['name', 'unit'];
}
