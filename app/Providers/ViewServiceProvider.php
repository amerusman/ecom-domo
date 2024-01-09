<?php

namespace App\Providers;

use App\Helpers\Translator;
use App\Models\Brand;
use App\Models\Category;
use App\Models\Country;
use App\Models\Language;
use App\Models\Page;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\View;

class ViewServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        $locale = app()->getLocale();
    }
}
