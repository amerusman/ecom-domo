<?php

namespace App\Models;

use \DateTimeInterface;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Review extends Model
{
    use HasFactory;

    public const STATUS_SELECT = [
        'new'         => 'New',
        'approved'    => 'Approved',
        'disapproved' => 'Disapproved',
    ];

    public $table = 'reviews';

    protected $dates = [
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    protected $fillable = [
        'product_id',
        'user_id',
        'language_id',
        'status',
        'rating',
        'name',
        'advantages',
        'disadvantages',
        'body',
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    public function product()
    {
        return $this->belongsTo(Product::class, 'product_id');
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function language()
    {
        return $this->belongsTo(Language::class, 'language_id');
    }

    protected function serializeDate(DateTimeInterface $date)
    {
        return $date->format('Y-m-d H:i:s');
    }

    public static function newCount()
    {
        return self::where('status', 'new')->count();
    }
}
