<?php

use Illuminate\Database\Seeder;
use App\User;
use Illuminate\Support\Facades\Hash;
class AdminUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'name' => 'Rosemarie Armintia',
            'email' => 'backend@multicorp.com',
            'password' => Hash::make('test123'),
            'role' => 1
        ]);
    }
}
