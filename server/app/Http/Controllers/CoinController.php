<?php

namespace App\Http\Controllers;

use App\Models\CoinRequest;
use App\Models\Passenger;
use Illuminate\Http\Request;

class CoinController extends Controller
{
    public function requestcoins(Request $request){
        $validatedData = $request->validate([
            'passenger_id' => 'required|exists:passengers,id',
            'amount' => 'required|numeric|min:0',
        ]);


        $payment = new CoinRequest();
        $payment->passenger_id =$request->passenger_id;
        $payment->amount = $request->amount;
        $payment->save();

        return response()->json(['message' => 'request sent  successfully'], 201);

    }

    public function get_requestcoins()
    {
        $coinRequests = CoinRequest::where('status', 'pending')->with('passenger.user')->get();

        $CoinRequests = $coinRequests->map(function ($coinRequest) {
            return [
                'id' => $coinRequest->id,
                'amount' => $coinRequest->amount,
                'status' => $coinRequest->status,
                'passenger_id' => $coinRequest->passenger_id,
                'passenger_name' => $coinRequest->passenger->user->name,
                'balance' => $coinRequest->passenger->balance,
            ];
        });
    
        return response()->json($CoinRequests);
    }

    public function accept_requestcoin(Request $req)
    {
        $coin_request = CoinRequest::find($req->id);
        $coin_request->status = "Accepted";
        $coin_request->save();

        $passenger = Passenger::find($coin_request->passenger_id);
        $passenger->balance += $coin_request->amount;
        $passenger->save();

        return response()->json([
            'message' => 'Coin request accepted and amount added to passenger balance successfully',
            'coin_req' => $coin_request,
            'passenger' => $passenger,
        ], 200);
    }

    public function reject_requestcoin(Request $req)
    {
        $coin_request = CoinRequest::find($req->id);
        $coin_request->status = "Rejected";
        $coin_request->save();

        return response()->json([
            'message' => 'Coin request rejected',
        ], 200);
    }
}
