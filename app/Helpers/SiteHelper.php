<?php

namespace App\Helpers;

use App\Facades\CountryFacade;
use App\Models\Country;
use App\Models\Language;
use App\Models\Property;
use Illuminate\Support\Facades\Auth;

class SiteHelper
{
    protected static $_currency;
    protected static $_country;

    public static function countryCode() {
        return self::country()->short_code;
    }
    public static function country()
    {
        if (empty(self::$_country))
        {
            $code = CountryFacade::getCountrySelected();
            if (auth()->check()) {
                $user = Auth::user();
                if ($user->country) {
                    return $user->country;
                }
            }
            self::$_country = Country::where('short_code', $code)->firstOrFail();
        }
        return self::$_country;
    }

    public static function currency()
    {
        if (empty(self::$_currency)) {
            self::$_currency = self::country()->currency;
        }
        return self::$_currency;
    }

    public static function language() {
        $locale = app()->getLocale();
        $language = Language::where('locale', $locale)->firstOrFail();
        return $language;
    }

    public static function lastViewedProducts($productId = null) {
        $key = 'viewed';
        $lastViewed = session($key, []);

        if ($productId) {
            $lastViewed[$productId] = $productId;
            session()->put($key, $lastViewed);
        }
        return $lastViewed;
    }

    public static function productsLimit()
    {
        $limit = min(24, max(16, intval(request()->get('limit', 16))));
        return $limit;
    }

    /*
     * returns price in format
     */
    public static function price($value) : string
    {
        if (!is_string($value)) {
            $value = $value->__toString();
        }
        if (is_numeric($value)) {
            return number_format($value, 2);
        }
        else {
            return $value;
        }
    }

    public static function countrySelected()
    {
        return CountryFacade::isCountrySelected();
    }

    public static function property($key)
    {
        $property = Property::where('key', $key)->first();
        if ($property) {
            return $property->value;
        }
        else {
            return null;
        }
    }
}
