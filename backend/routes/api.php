<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\stationsController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


Route::get('get_all_stations',[stationsController::class, 'get_all_stations']);
Route::get('get_all_stations',[stationsController::class, 'get_all_stations']);
Route::get('get_all_stations',[stationsController::class, 'get_all_stations']);
Route::get('get_all_stations',[stationsController::class, 'get_all_stations']);
Route::get('get_all_stations',[stationsController::class, 'get_all_stations']);
Route::get('get_all_stations',[stationsController::class, 'get_all_stations']);
Route::get('get_all_stations',[stationsController::class, 'get_all_stations']);

