<?php

namespace App\Http\Controllers;

use App\Models\CoinRequest;
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
}
