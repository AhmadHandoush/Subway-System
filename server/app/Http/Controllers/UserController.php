<?php

namespace App\Http\Controllers;
use App\Models\User;
use App\Models\Passenger;

use Illuminate\Http\Request;

class UserController extends Controller
{
    public function store(Request $request)
    {

        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|string|min:8',
            'latitude' => 'required|numeric',
            'longitude' => 'required|numeric',
        ]);


        $user = new User();
        $user->name = $validatedData['name'];
        $user->email = $validatedData['email'];
        $user->latitude = $validatedData['latitude'];
        $user->longitude = $validatedData['longitude'];
        $user->password = bcrypt($validatedData['password']);
        $user->save();
        $passenger = new Passenger([
            'user_id' => $user->id,


        ]);
        $passenger->save();





        return response()->json([
            'message' => 'User created successfully',
            $user,
    ], 201);
    }
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


}
