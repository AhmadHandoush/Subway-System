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
    public function get_departure_schedules(Request $req)
    {
        $station = Station::with('departureSchedules', 'departureSchedules.arrivalStation')
            ->find($req->id);

        if (!$station) {
            return response()->json(['error' => 'Station not found'], 404);
        }

        $departureSchedules = $station->departureSchedules;
        return response()->json($departureSchedules);
    }

    public function get_arrival_schedules(Request $req)
    {
        $station = Station::with('arrivalSchedules', 'arrivalSchedules.departureStation')
            ->find($req->id);

        if (!$station) {
            return response()->json(['error' => 'Station not found'], 404);
        }

        $arrivalSchedules = $station->arrivalSchedules;
        return response()->json($arrivalSchedules);
    }
}
