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
    public function getUserBalance($id)
    {
        $userBalance = Passenger::where('user_id', $id)->first();

        if (!$userBalance) {
            return response()->json(['error' => 'User balance not found'], 404);
        }

        return response()->json(['balance' => $userBalance->balance]);
    }
    public function getPassengerId($userId)
    {
        // Retrieve the passenger ID for the specific user
        $passengerId = Passenger::where('user_id', $userId)->value('id');

        // Check if a passenger ID was found
        if ($passengerId !== null) {
            // Passenger ID found for the specific user
            return response()->json(['passenger_id' => $passengerId], 200);
        } else {
            // Passenger ID not found for the specific user
            return response()->json(['error' => 'Passenger ID not found for the specified user'], 404);
        }
    }

}
