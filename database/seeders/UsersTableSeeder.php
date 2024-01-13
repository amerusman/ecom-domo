<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    public function run()
    {
        $users = [
            [
                'id'             => 1,
                'firstname'      => 'Admin',
                'email'          => 'admin@italyskincare.com',
                'password'       => bcrypt('JGzHdcWr'),
                'remember_token' => null,
            ],
            [
                'id'             => 2,
                'firstname'      => 'Александр',
                'email'          => 'alex@italyskincare.com',
                'password'       => bcrypt('RptdRJvr'),
                'remember_token' => null,
            ],
            [
                'id'             => 3,
                'firstname'      => 'Дина',
                'email'          => 'dina@italyskincare.com',
                'password'       => bcrypt('gcJBVfBT'),
                'remember_token' => null,
            ],
            [
                'id'             => 4,
                'firstname'      => 'Александра',
                'email'          => 'alexandra@italyskincare.com',
                'password'       => bcrypt('fRhAVAMv'),
                'remember_token' => null,
            ],
            [
                'id'             => 5,
                'firstname'      => 'Светлана',
                'email'          => 'svetlana@italyskincare.com',
                'password'       => bcrypt('WCmprXHC'),
                'remember_token' => null,
            ],
            [
                'id'             => 6,
                'firstname'      => 'Manager',
                'email'          => 'manager@italyskincare.com',
                'password'       => bcrypt('tsAEAjDE'),
                'remember_token' => null,
            ],
        ];

        User::insert($users);
    }
}
