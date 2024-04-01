<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Station;

class StationSeeder extends Seeder
{

    public function run(): void
    {
        Station::create([
            'name' => 'Beirut Station',
            'open_hour' => '06:00:00',
            'close_hour' => '22:00:00',
            'latitude' => 33.8886,
            'longitude' => 35.4955,
            'status' => 'Active',
            'image' => 'station1.jpg',
            'manager_id' => 1,
        ]);

        Station::create([
            'name' => 'Akkar Station',
            'open_hour' => '06:00:00',
            'close_hour' => '22:00:00',
            'latitude' => 34.5329,
            'longitude' => 36.1328,
            'status' => 'Active',
            'image' => 'station2.jpg',
            'manager_id' => 2,
        ]);
    }
}
