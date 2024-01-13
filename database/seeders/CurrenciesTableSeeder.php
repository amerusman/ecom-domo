<?php

namespace Database\Seeders;

use App\Models\Country;
use App\Models\Currency;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CurrenciesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $currencies = [
            [
                'name'      => 'Euro',
                'code'      => 'EUR',
                'sign'      => '&euro;',
            ],
            [
                'name'      => 'Swiss Franc',
                'code'      => 'CHF',
                'sign'      => 'CHF',
            ],
            [
                'name'      => 'Dollar',
                'code'      => 'USD',
                'sign'      => '$',
            ],
        ];

        Currency::insert($currencies);

        Country::where('short_code', 'it')->update(['currency_id' => 1]);
        Country::where('short_code', 'de')->update(['currency_id' => 1]);
        Country::where('short_code', 'ch')->update(['currency_id' => 2]);
    }
}
