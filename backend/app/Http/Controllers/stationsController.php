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

        if($manager){
            $station = $manager->stations;

            $station->update([
                'open_hour'=>$req->open_hour,
                'close_hour'=>$req->close_hour,
                'status'=>$req->status
            ]);

        }
         
        return response()->json([

        ]);


    
    }



}
