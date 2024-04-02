<?php

use App\Http\Controllers\LoginController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\StationController;




use App\Http\Controllers\SignUp;

Route::post('register',[SignUp::class,'signUp']);
Route::post('login',[LoginController::class,'Login']);
=======

/*Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');*/

Route::get('get_stations', [StationController::class, "get_all_stations"]);

