<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Station;
use App\Models\Ride;

class ManagerController extends Controller
{
    public function get_manager_station(Request $req)
    {
        $station = Station::where('manager_id', $req->manager_id)->first();
        
        if (!$station) {
            return response()->json(['error' => 'No Station'], 404);
        }
        return response()->json([
            "message" => "Updated successfully",
            'station' => $station,
        ], 200);
    }

    public function update_station_info(Request $req)
    {
        //$manager = Manager::find($req->manager_id);
        //$station = $manager->station;
        $req->validate([
            'open_hour' => 'required|string',
            'close_hour' => 'required|string',
            'status' => 'required|string',
        ]);
        $station = Station::where('manager_id', $req->manager_id)->first();
        
        if (!$station) {
            return response()->json(['error' => 'Station not found'], 404);
        }
        $station->update([
            "status"=>$req->status,
            "open_hour"=>$req->open_hour,
            "close_hour"=>$req->close_hour,
        ]);
        return response()->json([
            "message" => "Updated successfully",
            'station' => $station,
        ], 200);
    }

    public function create_ride(Request $req)
    {
        $req->validate([
            'arrival_station_id' => 'required|exists:stations,id',
            'departure_time' => 'required|date',
            'arrival_time' => 'required|date|after:departure_time',
        ]);
        
        $ride = new Ride();
        $ride->departure_station_id = $req->id;
        $ride->arrival_station_id = $req->arrival_station_id;
        $ride->departure_time = $req->departure_time;
        $ride->arrival_time = $req->arrival_time;
        $ride->save();

        return response()->json([
            'message' => 'Ride created successfully',
            'ride' => $ride
        ], 201);
    }

    public function update_ride(Request $req)
    {
        $req->validate([
            'arrival_station_id' => 'required|exists:stations,id',
            'departure_time' => 'required|date',
            'arrival_time' => 'required|date|after:departure_time',
        ]);
        
        $ride = Ride::findOrFail($req->id);
        $ride->departure_station_id = $req->station_id;
        $ride->arrival_station_id = $req->arrival_station_id;
        $ride->departure_time = $req->departure_time;
        $ride->arrival_time = $req->arrival_time;
        $ride->save();

        return response()->json([
            'message' => 'Ride updated successfully',
            'ride' => $ride
        ], 200);
    }

    public function get_station_reviews(Request $req)
    {
        $station = Station::where('manager_id', $req->manager_id)->first();

        if (!$station) {
            return response()->json(['error' => 'Station not found'], 404);
        }

        $rides = $station->departureSchedules;
        $rideReviews = [];
        foreach ($rides as $ride) {
            $reviews = $ride->rideReviews;
            $rideReviews[$ride->id] = $reviews;
        }

        return response()->json([
            "message" => "station rides and reviews found successfully",
            "ride_reviews" => $rideReviews
        ], 200);
    }
}
