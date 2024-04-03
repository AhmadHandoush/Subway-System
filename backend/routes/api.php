<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\stationsController;




Route::get('get_all_stations',[stationsController::class, 'get_all_stations']);
Route::put('update_stations/{id}',[stationsController::class, 'update_stations']);
