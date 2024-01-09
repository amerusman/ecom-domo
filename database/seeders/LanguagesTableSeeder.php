<?php

namespace Database\Seeders;

use App\Models\Country;
use App\Models\Language;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class LanguagesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $languages = [
            [
                'id'        => 1,
                'name'      => 'English',
                'code'      => 'en',
                'locale'    => 'en',
            ],
            [
                'id'        => 2,
                'name'      => 'Italian',
                'code'      => 'it',
                'locale'    => 'it',
            ],
            [
                'id'        => 3,
                'name'      => 'German',
                'code'      => 'de',
                'locale'    => 'de',
            ],
            [
                'id'        => 4,
                'name'      => 'French',
                'code'      => 'fr',
                'locale'    => 'fr',
            ],
        ];

        Language::insert($languages);

        Country::where('short_code', 'it')->first()->languages()->sync([1, 2]);
        Country::where('short_code', 'de')->first()->languages()->sync([1, 3]);
        Country::where('short_code', 'ch')->first()->languages()->sync([1, 2, 3, 4]);
    }
}
