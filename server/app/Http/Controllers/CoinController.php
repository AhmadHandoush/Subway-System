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

        // Create new payment record
        $payment = new CoinRequest();
        $payment->passenger_id = $validatedData['passenger_id'];
        $payment->amount = $validatedData['amount'];
        $payment->save();

        return response()->json(['message' => 'Payment added successfully'], 201);

    }
}
