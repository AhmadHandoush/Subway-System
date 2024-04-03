<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Passenger;

class PassengerController extends Controller
{
    public function get_all_passengers()
    {
        $passengers = Passenger::all();
        return response()->json($passengers);
    }

    public function get_passenger_by_id(Request $req)
    {
        $passenger = Passenger::find($req->id);
        return response()->json($passenger);
    }
    
}
