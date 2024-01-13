<?php

namespace App\Helpers;

use App\Models\Language;
use App\Models\Translation;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Str;

class Translator
{
    protected static array $translation = [];

    public static function init(): void
    {
        $locale = app()->getLocale();
        $cacheKey = Translation::CACHE_KEY . '_' . $locale;

        if (Cache::has($cacheKey))
        {
            self::$translation = Cache::get($cacheKey);
        }
        else
        {
            $translations = Translation::all();
            $result = [];
            foreach ($translations as $translation) {
                $key = $translation->section . '.' . $translation->key;
                $result[$key] = $translation->value;
            }
            Cache::forever($cacheKey, $result);
            self::$translation = $result;
        }
    }

    public static function __(string $key, string $default = null): string
    {
        if (substr_count($key, '.')) {
            list($section, $key) = explode('.', $key, 2);
        }
        else {
            $section = Translation::SECTION_DEFAULT;
        }

        $fullKey = $section . '.' . $key;
        if (isset(self::$translation[$fullKey])) {
            return self::$translation[$fullKey];
        }

        Cache::forget(Translation::CACHE_KEY . '_' . app()->getLocale());
        $translation = Translation::where('section', $section)->where('key', $key)->first();
        if (!$translation) {
            $data = [
                'section'   => trim($section),
                'key'       => trim($key),
                'value'     => $default ?: $key,
            ];
            $translation = Translation::create($data);
        }
        return $translation->value;
    }

    public static function do(string $value, string $section = null): string
    {
        $key = Str::slug($value, '_');
        if ($section) {
            $key = $section . '.' . $key;
        }
        return self::__($key, $value);
    }

    public static function forgetCache(string $cacheKey): void
    {
        foreach(Language::all() as $lang) {
            Cache::forget($cacheKey . '_' . $lang->code);
        }
    }
}
