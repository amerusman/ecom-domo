<?php

namespace Database\Seeders;

use App\Models\Feature;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class FeaturesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $features = [
            [
                'key'   => 'format',
                'name'  => [
                    "de" => "Format",
                    "en" => "Format",
                    "fr" => null,
                    "it" => "Formato",
                ],
                'type'  => 'text',
            ],
        ];

        foreach ($features as $feature) {
            Feature::create($feature);
        }
    }
}
