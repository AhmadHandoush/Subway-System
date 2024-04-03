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
    public function get_active_stations()
    {
        $active_stations = Station::where('status', "Active")->get();
        return response()->json($active_stations);
    }
}
