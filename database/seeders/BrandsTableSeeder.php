<?php

namespace Database\Seeders;

use App\Models\Brand;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class BrandsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $brands = [
            'Euphoria',
            'Zero Milano',
        ];
        foreach ($brands as $brand) {
            $data = [
                'name'      => $brand,
                'slug'      => Str::slug($brand),
                'active'    => 1,
            ];
            Brand::create($data);
        }
    }
}
