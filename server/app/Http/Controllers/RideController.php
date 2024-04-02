<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Ride;

class RideController extends Controller
{
    public function get_all_rides()
    {
        $rides = Ride::all();
        return response()->json($rides);
    }

}
