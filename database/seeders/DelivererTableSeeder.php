<?php

namespace Database\Seeders;

use App\Models\Deliverer;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DelivererTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Deliverer::create([
            'name'  => 'DHL',
            'site'  => 'mydhl.express.dhl'
        ]);
    }
}
