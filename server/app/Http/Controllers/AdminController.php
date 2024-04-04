<?php

namespace App\Http\Controllers;

use App\Models\Station;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function addStation(Request $req)
    {
        $req->validate([
            'name' => 'required',
            'latitude' => 'required',
            'longitude' => 'required',
            'status' => 'required',
            'manager_id' => 'required|exists:managers,id'
        ]);

        $station = Station::create([
            'name' => $req->name,
            'open_hour' => $req->open_hour,
            'close_hour' => $req->close_hour,
            'latitude' => $req->latitude,
            'longitude' => $req->longitude,
            'status' => $req->status,
            'manager_id' => $req->manager_id,
            'image' => $req->image,
        ]);
        return response()->json([
            'message' => 'Station created successfully',
        ], 201);
    }
}
