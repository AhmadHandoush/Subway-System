<?php

use App\Http\Controllers\CoinController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\StationController;
use App\Http\Controllers\PassengerController;
use App\Http\Controllers\RideController;
use App\Http\Controllers\AdminController;

use App\Http\Controllers\UserController;
use App\Http\Controllers\LoginController;

use App\Http\Controllers\ManagerController;


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

/*Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});*/


Route::get('get_stations', [StationController::class, "get_all_stations"]);
Route::get('get_active_stations', [StationController::class, "get_active_stations"]);
Route::get('count_active_stations', [StationController::class, "count_active_stations"]);
Route::post('get_departure_schedules', [StationController::class, "get_departure_schedules"]);
Route::post('get_arrival_schedules', [StationController::class, "get_arrival_schedules"]);
Route::post('remove_station', [StationController::class, "remove_station"]);
Route::post('shutdown_station', [StationController::class, "shutdown_station"]);
Route::post('activate_station', [StationController::class, "activate_station"]);

Route::post('get_manager_station/{manager_id}', [ManagerController::class, "get_manager_station"]);
Route::post('update_station/{manager_id}', [ManagerController::class, "update_station_info"]);
Route::post('create_ride', [ManagerController::class, "create_ride"]);
Route::post('update_ride/{id}', [ManagerController::class, "update_ride"]);
Route::post('get_station_reviews', [ManagerController::class, "get_station_reviews"]);
Route::post('get_manager/{user_id}', [ManagerController::class, "get_manager"]);

Route::get('get_passengers', [PassengerController::class, "get_all_passengers"]);
Route::get('count_passengers', [PassengerController::class, "count_passengers"]);
Route::post('get_passenger', [PassengerController::class, "get_passenger_by_id"]);

Route::get('get_rides', [RideController::class, "get_all_rides"]);
Route::get('/users/{id}', [UserController::class, 'getUser']);
Route::post('/users/{id}/update', [UserController::class, 'updateUser']);
Route::get('/user/{id}/balance', [PassengerController::class, 'getUserBalance']);
Route::post('/add_user', [UserController::class,"store"]);
Route::post('/login', [LoginController::class, 'login']);
Route::post('/request_coins', [CoinController::class, 'requestcoins']);
Route::get('/get_three', [StationController::class, 'get_three']);

Route::get('coin_requests', [CoinController::class, 'get_requestcoins']);
Route::post('accept_request', [CoinController::class, 'accept_requestcoin']);
Route::post('reject_request', [CoinController::class, 'reject_requestcoin']);

Route::post('add_station', [AdminController::class, 'addStation']);

Route::post('get_station_rides{id}', [RideController::class, "get_station_rides"]);
Route::post('get_departing_rides/{id}', [RideController::class, "get_departing_rides"]);