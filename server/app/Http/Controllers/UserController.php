<?php

namespace App\Http\Controllers;
use App\Models\User;
use App\Models\Passenger;

use Illuminate\Http\Request;

class UserController extends Controller
{
    public function getUser($id)
    {
        $user = User::findOrFail($id);

        return response()->json($user);
    }


    public function updateUser(Request $request, $id)
    {
        $user = User::findOrFail($id);

        $request->validate([
            'name' => 'string|max:255',
            'email' => 'email|unique:users,email,'.$user->id,

        ]);

        $user->update($request->all());

        return response()->json($user);
    }
    public function getUserBalance($id)
    {
        $userBalance = Passenger::where('user_id', $id)->first();

        if (!$userBalance) {
            return response()->json(['error' => 'User balance not found'], 404);
        }

        return response()->json(['user_id' => $userBalance->user_id, 'balance' => $userBalance->balance]);
    }

}
