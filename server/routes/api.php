<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\StationController;
use App\Http\Controllers\PassengerController;
use App\Http\Controllers\RideController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::get('get_stations', [StationController::class, "get_all_stations"]);
Route::get('get_active_stations', [StationController::class, "get_active_stations"]);
Route::post('get_station_dep_schedule', [StationController::class, "get_departure_schedules"]);
Route::post('get_station_arr_schedule', [StationController::class, "get_arrival_schedules"]);
Route::get('get_passengers', [PassengerController::class, "get_all_passengers"]);
Route::post('get_passenger', [PassengerController::class, "get_passenger_by_id"]);
Route::get('get_rides', [RideController::class, "get_all_rides"]);