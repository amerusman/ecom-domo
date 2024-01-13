<?php

namespace App\Helpers;

use Illuminate\Support\Facades\Route;

class Utils
{
    public static function changeLocale(string $locale) {
        $route = Route::current();
        $parameters = $route->parameters();
        $parameters['locale'] = $locale;
        $name = $route->getName();
        if ($name) {
            return route($name, $parameters);
        }
        else {
            return '/' . $locale;
        }
    }
}
