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

    public function get_three()
    {
       
        $stations = Station::limit(3)->get();

        return response()->json(['stations' => $stations], 200);
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

    public function remove_station(Request $req)
    {
        $station = Station::find($req->id);
        if (!$station) {
            return response()->json(['error' => 'Station not found'], 404);
        }
        $station->delete();
        return response()->json([
            "message" => "deleted successfully",
        ], 200);
    }

    public function shutdown_station(Request $req)
    {
        $station = Station::find($req->id);
        if (!$station) {
            return response()->json(['error' => 'Station not found'], 404);
        }
        $station->update([
            'status' => 'Inactive',
        ]);
    
        return response()->json([
            'message' => 'station shuttdown successfully',
            'station' => $station,
        ], 200);
    }

    public function activate_station(Request $req)
    {
        $station = Station::find($req->id);
        if (!$station) {
            return response()->json(['error' => 'Station not found'], 404);
        }
        /*$station->update([
            'status' => 'Active',
        ]);*/
        $station->status = 'Active';
        $station->save();
    
        return response()->json([
            'message' => 'station activated successfully',
            'station' => $station,
        ], 200);
    }

}
