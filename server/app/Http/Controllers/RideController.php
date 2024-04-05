<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Ride;
use App\Models\Station;

class RideController extends Controller
{
    public function get_all_rides()
    {
        $rides = Ride::all();
        return response()->json([
            "message" => "stations found successfully",
            "rides" => $rides
        ], 200);
    }

    public function get_station_rides(Request $req)
    {
        $station = Station::with('arrivalSchedules')
            ->find($req->id);

        if (!$station) {
            return response()->json(['error' => 'Station not found'], 404);
        }

        $rides = $station->arrivalSchedules;
        return response()->json([
            "message" => "station rides found successfully",
            "rides" => $rides
        ], 200);
    }

    public function get_departing_rides(Request $req)
    {
        $station = Station::with('departureSchedules')
            ->find($req->id);


    public function count_station_arrival_rides(Request $req)
    {
        $station = Station::withCount('arrivalSchedules')
                        ->find($req->id);

        if (!$station) {
            return response()->json(['error' => 'Station not found'], 404);
        }

        $arrivalRideCount = $station->getArrivalRideCountAttribute();

        return response()->json([
            "message" => "Station rides found successfully",
            "arrivalRideCount" => $arrivalRideCount
        ], 200);
    }

    public function count_station_dep_rides(Request $req)
    {
        $station = Station::withCount('departureSchedules')
                        ->find($req->id);


        if (!$station) {
            return response()->json(['error' => 'Station not found'], 404);
        }


        $rides = $station->departureSchedules;
        return response()->json([
            "message" => "station rides found successfully",
            "rides" => $rides
        ], 200);
    }

        $departureRideCount = $station->getDepartureRideCountAttribute();

        return response()->json([
            "message" => "Station rides found successfully",
            "departureRideCount" => $departureRideCount
        ], 200);
    }

}
