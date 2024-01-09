<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class CategoriesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $categories = [
            'Styling gel',
            'Wax',
            'Balm',
            'Lubricant'
        ];

        foreach ($categories as $category) {
            $data = [
                'name'      => $category,
                'slug'      => Str::slug($category),
                'active'    => 1,
            ];
            Category::create($data);
        }
    }
}
