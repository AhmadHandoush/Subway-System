<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class SignUp extends Controller
{
    public function signUp(Request $request)
    {
        // Validate the incoming request data
        $validatedData = $request->all();

        // Create a new user instance
        $user = User::create([
            'name' => $validatedData['username'],
            'email' => $validatedData['email'],
            'password' => bcrypt($validatedData['password']),
        ]);

        // Optionally, you can return a response indicating success
        return response()->json(['message' => 'Data validated successfully', 'data' => $validatedData], 200);
      }
}
