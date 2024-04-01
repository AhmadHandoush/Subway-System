<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

use App\Models\User;
use App\Models\Passenger;
use App\Models\Headquarter;
use App\Models\Manager;

class UserSeeder extends Seeder
{
    public function run(): void
    {
        $user = User::create(['name' => 'John Doe',
        'email' => 'john.doe@gmail.com',
        'password' => Hash::make('password'),
        'role' => 'passenger',]);

        Passenger::create([
            'user_id' => $user->id,
            'location' => 'Beirut',
            'balance' => 100,
        ]);

        $user2 = User::create([
            'name' => 'Jane Smith',
            'email' => 'jane.smith@gmail.com',
            'password' => Hash::make('password'),
            'role' => 'manager',
        ]);

        Manager::create([
            'user_id' => $user2->id,
        ]);

        $user3 = User::create([
            'name' => 'Admin User',
            'email' => 'admin.user@gmail.com',
            'password' => Hash::make('password'),
            'role' => 'admin',
        ]);

        Headquarter::create([
            'user_id' => $user3->id,
        ]);

        $user4 = User::create([
            'name' => 'Jane Andersson',
            'email' => 'jane.andersson@gmail.com',
            'password' => Hash::make('password'),
            'role' => 'passenger',
        ]);
        
        Passenger::create([
            'user_id' => $user4->id,
            'location' => 'Tripoli',
            'balance' => 200,
        ]);
        
        $user5 = User::create([
            'name' => 'Alice Smith',
            'email' => 'alice.smith@gmail.com',
            'password' => Hash::make('password'),
            'role' => 'passenger',
        ]);
        
        Passenger::create([
            'user_id' => $user5->id,
            'location' => 'Chouf',
            'balance' => 300,
        ]);
        
        $user6 = User::create([
            'name' => 'Bob Johnson',
            'email' => 'bob.johnson@gmail.com',
            'password' => Hash::make('password'),
            'role' => 'passenger',
        ]);
        
        Passenger::create([
            'user_id' => $user6->id,
            'location' => 'Saiida',
            'balance' => 400,
        ]);
        
        $user7 = User::create([
            'name' => 'Charlie Brown',
            'email' => 'charlie.brown@gmail.com',
            'password' => Hash::make('password'),
            'role' => 'passenger',
        ]);
        
        Passenger::create([
            'user_id' => $user7->id,
            'location' => 'Batroun',
            'balance' => 500,
        ]);
    }
}
