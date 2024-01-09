<?php

namespace App\Providers;

use App\Models\Banner;
use App\Models\Brand;
use App\Models\Category;
use App\Services\CartService;
use App\Services\CountryService;
use App\Services\FavoritesService;
use Illuminate\Support\ServiceProvider;
use Illuminate\Database\Eloquent\Relations\Relation;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind('Cart', function ($app) {
            return new CartService();
        });
        $this->app->bind('Favorites', function ($app) {
            return new FavoritesService();
        });
        $this->app->bind('CountryFacade', function ($app) {
            return new CountryService();
        });
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Relation::morphMap([
            'product' => 'App\Models\Product',
            'brand'     => Brand::class,
            'category'  => Category::class,
            'banner'    => Banner::class,
        ]);
    }
}
