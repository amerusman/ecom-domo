<?php

namespace App\Models;

use \DateTimeInterface;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\Translatable\HasTranslations;

class Translation extends Model
{
    use HasFactory;
    use HasTranslations;

    public const SECTION_SELECT = [
        'global'   => 'Global',
        'home'     => 'Home',
        'checkout' => 'Checkout',
        'profile'  => 'Profile',
    ];
    public const SECTION_DEFAULT = 'global';

    public const CACHE_KEY  = 'translations';

    public $table = 'translations';

    protected $dates = [
        'created_at',
        'updated_at',
    ];

    protected $fillable = [
        'section',
        'key',
        'value',
        'created_at',
        'updated_at',
    ];

    public $translatable = ['value'];

    private static $_sectionSelect = null;

    public static function sectionSelect()
    {
        if (!self::$_sectionSelect) {
            self::$_sectionSelect = self::select('section')->distinct()->get()->pluck('section', 'section');
        }
        return self::$_sectionSelect;
    }

    protected function serializeDate(DateTimeInterface $date)
    {
        return $date->format('Y-m-d H:i:s');
    }
}
