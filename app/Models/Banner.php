<?php

namespace App\Models;

use DateTimeInterface;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\MediaLibrary\MediaCollections\Models\Media;
use Spatie\Translatable\HasTranslations;

class Banner extends Model implements HasMedia
{
    use InteractsWithMedia, HasFactory;
    use HasTranslations;

    public $table = 'banners';

    protected $appends = [
        'image',
    ];

    protected $dates = [
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    protected $fillable = [
        'name',
        'left_line_1',
        'left_line_2',
        'right_line_1',
        'right_line_2',
        'active',
        'position',
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    public $translatable = ['left_line_1', 'left_line_2', 'right_line_1', 'right_line_2'];

    protected function serializeDate(DateTimeInterface $date)
    {
        return $date->format('Y-m-d H:i:s');
    }

    public function registerMediaConversions(Media $media = null): void
    {
        $this->addMediaConversion('thumb')->fit('crop', 50, 50)->keepOriginalImageFormat();
        $this->addMediaConversion('preview')->fit('crop', 120, 120)->keepOriginalImageFormat();
        $this->addMediaConversion('show')->fit('crop', 450, 270)->keepOriginalImageFormat();
    }

    public function getImageAttribute()
    {
        $file = $this->getMedia('image')->last();
        if ($file) {
            $file->url       = $file->getUrl();
            $file->thumbnail = $file->getUrl('thumb');
            $file->preview   = $file->getUrl('preview');
            $file->show      = $file->getUrl('show');
        }

        return $file;
    }

    public function getTextAttribute()
    {
        return $this->left_line_1 . ' ' . $this->left_line_2 . ' ' . $this->right_line_1 . ' ' . $this->right_line_2;
    }
}
