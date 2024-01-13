<?php

namespace App\Models;

use App\Helpers\SiteHelper;
use \DateTimeInterface;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cookie;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\MediaLibrary\MediaCollections\Models\Media;
use Spatie\Translatable\HasTranslations;

class Product extends Model implements HasMedia
{
    use SoftDeletes;
    use InteractsWithMedia;
    use HasFactory;
    use HasTranslations;

    public $table = 'products';

    protected $appends = [
        'photos',
    ];

    protected $dates = [
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    protected $fillable = [
        'name',
        'slug',
        'sku',
        'active',
        'in_stock',
        'trending',
        'main',
        'showcase',
        'on_sale',
        'rating',
//        'price',
        'prices',
        'sale_prices',
        'description',
        'brief',
        'brand_id',
        'data',
        'discount',
        'warehouse_id',
        'is_kit',
        'kit',
        'position',
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    public $translatable = [
        'name',
        'description',
        'brief'
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array
     */
    protected $casts = [
        'prices' => 'array',
        'sale_prices' => 'array',
        'data' => 'array',
        'kit' => 'array',
    ];

    public function registerMediaConversions(Media $media = null): void
    {
        $this->addMediaConversion('thumb')->fit('crop', 75, 50)->keepOriginalImageFormat();
        $this->addMediaConversion('preview')->fit('crop', 262, 176)->keepOriginalImageFormat();
        $this->addMediaConversion('show')->fit('crop', 373, 272)->keepOriginalImageFormat();
        $this->addMediaConversion('main')->fit('crop', 446, 299)->keepOriginalImageFormat();
    }

    public function categories()
    {
        return $this->belongsToMany(Category::class);
    }

    public function tags()
    {
        return $this->belongsToMany(Tag::class);
    }

    public function getPhotosAttribute()
    {
        $files = $this->getMedia('photos');
        $files->each(function ($item) {
            $item->url = $item->getUrl();
            $item->thumbnail = $item->getUrl('thumb');
            $item->preview = $item->getUrl('preview');
            $item->show = $item->getUrl('show');
            $item->main = $item->getUrl('main');
        });

        return $files;
    }

    public function getPriceAttribute()
    {
        $code = SiteHelper::country()->short_code;

        if ($this->on_sale && isset($this->sale_prices[$code])) {
            $price = $this->sale_prices[$code];
        }
        elseif ( isset($this->prices[$code]) ) {
            $price = $this->prices[$code];
        }
        else {
            $price = null;
        }
        //detect selling campaign
        if (Cookie::get('campaign')) {
            $campaign = $this->campaigns()->where('slug', Cookie::get('campaign'))->first();
            if($campaign && !empty($campaign->pivot->price)) {
                $price = $campaign->pivot->price;
            }
        }

        if ( $price ) {
            $result = number_format($price, 2);
        }
        else {
            $result = null;
        }
        return $result;
    }
    public function getRegularPriceAttribute()
    {
        //detect selling campaign
        if (Cookie::get('campaign')) {
            $campaign = $this->campaigns()->where('slug', Cookie::get('campaign'))->first();
            if($campaign && !empty($campaign->pivot->price)) {
                $price = $campaign->pivot->price;
                return number_format($price, 2);
            }
        }

        $code = SiteHelper::country()->short_code;
        if ( isset($this->prices[$code]) ) {
            return number_format($this->prices[$code], 2);
        }
        else {
            null;
        }
    }

    public function brand()
    {
        return $this->belongsTo(Brand::class, 'brand_id');
    }

    public function favorites()
    {
        return $this->belongsToMany(User::class, 'favorites', 'product_id', 'user_id');
    }

    public function reviews()
    {
        return $this->hasMany(Review::class)->where('status', 'approved');
    }

    public function productReviews()
    {
        return $this->hasMany(Review::class, 'product_id', 'id');
    }

    public function warehouse()
    {
        return $this->belongsTo(Warehouse::class, 'warehouse_id');
    }

    public function campaigns()
    {
        return $this->belongsToMany(Campaign::class)
            ->where('active', 1)
            ->using(CampaignProduct::class)
            ->withPivot('rprice', 'price');
    }

    /**
     * Scope a query to only include active products.
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @return void
     */
    public function scopeActive($query)
    {
        $query->where('active', 1);
    }

    /**
     * Scope a query to only include new & trending products.
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @return void
     */
    public function scopeTrending($query)
    {
        $query->where('trending', 1);
    }

    /**
     * Scope a query to sort products.
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @return void
     */
    public function scopeProcessRequest($query)
    {
        $country = SiteHelper::countryCode();
        $query->where('active', 1);
        if (request()->filled('order-by')) {
            switch (request()->get('order-by')) {
                case 'rating':
                    $query->orderBy('rating', 'desc');
                    break;
                case 'price':
                    $query->orderByRaw('CAST(`prices`->"$.' . $country . '" AS unsigned)');
                    break;
            }
        }

        $query->orderBy('position')->orderBy('id', 'desc');
    }

    public function getIsFavoriteAttribute()
    {
        if( Auth::check() ) {
            $userId = Auth::id();
            return $this->favorites()->where('id', $userId)->count();
        }
        else {
            $key = 'favorites';
            $favorites = session($key, []);
            return isset($favorites[$this->id]);
        }
    }

    /**
     * Returns the Specifications of the product.
     *
     * @return Illuminate\Support\Collection
     */
    public function getSpecificationsAttribute() : Collection
    {
        $result = collect([]);
        $features = Feature::all()->keyBy('key');
        if ($this->data)
        {
            foreach ($this->data as $key => $feature)
            {
                if($feature && isset($features[$key]))
                {
                    $specification = collect([
                        'name'   => $features[$key]->name,
                        'value'  => $feature,
                        'unit'   => $features[$key]->unit,
                    ]);
                    $result->put($key, $specification);
                }
            }
        }

        return $result;
    }


    protected function serializeDate(DateTimeInterface $date)
    {
        return $date->format('Y-m-d H:i:s');
    }
}
