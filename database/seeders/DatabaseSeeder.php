<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run()
    {
        $this->call([
            PermissionsTableSeeder::class,
            RolesTableSeeder::class,
            PermissionRoleTableSeeder::class,
            UsersTableSeeder::class,
            RoleUserTableSeeder::class,
            CountriesTableSeeder::class,
            LanguagesTableSeeder::class,
            CurrenciesTableSeeder::class,
            PagesTableSeeder::class,
            BrandsTableSeeder::class,
            CategoriesTableSeeder::class,
            BlocksTableSeeder::class,
            LettersTableSeeder::class,
            WarehousesTableSeeder::class,
            DelivererTableSeeder::class,
            FeaturesTableSeeder::class,
            ProductsTableSeeder::class,
        ]);
    }
}
