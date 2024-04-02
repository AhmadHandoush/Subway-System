<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Station;

class StationController extends Controller
{
    public function get_all_stations()
    {
        $stations = Station::all();
        return response()->json($stations);
    }
}
