<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
class LoginController extends Controller
{
    public function Login(Request $request)
    {
        $credentials = $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        // Find the user by email
        $user = User::where('email', $credentials['email'])->first();
        if($user){
            return response()->json(['message' => 'Login successful', 'user' => $user],200);
        }else{
            return response()->json(['message' => 'no user'],200);
        }
      }
}
