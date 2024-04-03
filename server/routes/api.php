<?php

use App\Http\Controllers\CoinController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\StationController;
use App\Http\Controllers\PassengerController;
use App\Http\Controllers\RideController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\LoginController;
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
Route::get('get_passengers', [PassengerController::class, "get_all_passengers"]);
Route::post('get_passenger', [PassengerController::class, "get_passenger_by_id"]);
Route::get('get_rides', [RideController::class, "get_all_rides"]);
Route::get('/users/{id}', [UserController::class, 'getUser']);
Route::post('/users/{id}/update', [UserController::class, 'updateUser']);
Route::get('/user/{id}/balance', [PassengerController::class, 'getUserBalance']);
Route::post('/add_user', [UserController::class,"store"]);
Route::post('/login', [LoginController::class, 'login']);
Route::post('/request_coins', [CoinController::class, 'requestcoins']);
