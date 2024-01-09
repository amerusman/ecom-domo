<?php

namespace App\Http\Middleware;

use App\Helpers\Translator;
use App\Models\Brand;
use App\Models\Category;
use App\Models\Country;
use App\Models\Language;
use App\Models\Page;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\View;
use Illuminate\Support\Facades\Cache;

class Cacher
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
        $locale = app()->getLocale();

        Translator::init();

        $countries = Cache::remember(Country::CACHE_KEY . '_' . $locale, 600, function () {
            return Country::where('active', 1)->orderBy('name')->get()->pluck('name', 'id');
        });
        View::share('countries', $countries);

        $pages = Cache::remember(Page::CACHE_KEY . '_' . $locale, 600, function () {
            return Page::all()->pluck('title', 'slug');
        });
        View::share('pages', $pages);

        $brands = Cache::remember(Brand::CACHE_KEY . '_' . $locale, 600, function () {
            return Brand::where('active', 1)->orderBy('name')->get();
        });
        View::share('brands', $brands);

        $categories = Cache::remember(Category::CACHE_KEY . '_' . $locale, 600, function () {
            return Category::where('active', 1)->orderBy('name')->get();
        });
        View::share('categories', $categories);

        $languages = Cache::remember('languages', 600, function () {
            return Language::all();
        });
        View::share('languages', $languages);

        return $next($request);
    }
}
