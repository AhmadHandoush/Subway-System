<?php

use App\Http\Controllers\LoginController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');

use App\Http\Controllers\SignUp;

Route::post('register',[SignUp::class,'signUp']);
Route::post('login',[LoginController::class,'Login']);
