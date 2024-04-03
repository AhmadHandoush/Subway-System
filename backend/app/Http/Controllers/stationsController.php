<?php

namespace App\Http\Controllers;
use App\Models\Station;
use App\Models\Manager;

 use Illuminate\Http\Request;


class stationsController extends Controller
{
    public function get_all_stations(Request $req){

        
        $Stations = Station::all();
        
        return response()->json($Stations);
    }

    public function update_stations(Request $req){

        $manager = Manager::find($req->id);

        if(!$manager) {
            return response()->json(["message" => "Manager not found"], 404);
        }
    
        // Retrieve the first Station associated with the Manager
        $station = $manager->stations()->first();
    
        // Check if Station exists
        if(!$station) {
            return response()->json(["message" => "Station not found"], 404);
        }
    
        // Update the Station attributes
        $station->update([
            'open_hour' => $req->open_hour,
            'close_hour' => $req->close_hour,
            'status' => $req->status
        ]);
    
        // Return a success response
        return response()->json(["message" => "Station updated successfully"], 200);
    }
    }


