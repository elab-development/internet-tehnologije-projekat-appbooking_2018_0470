<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ReservationTestController;
use App\Http\Controllers\ReservationController;
use App\Http\Controllers\ClientController;
use App\Http\Controllers\ClientReservationController;

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
//Route::get('/reservations', [ReservationTestController::class, 'index']);
//Route::get('/reservations/{id}', [ReservationTestController::class, 'show']);


//Route::resource('reservations', ReservationTestController::class);
//Route::resource('reservations', ReservationController::class);


Route::get('/clients/{id}', [ClientController::class, 'show'])->name('clients.show');
Route::get('/clients', [ClientController::class, 'index'])->name('clients.index');
Route::get('/clients/{id}/reservations', [ClientReservationController::class, 'index'])->name('clients.reservations.index');

Route::resource('reservations', ReservationController::class);
//Route::resource('clients.reservations', ClientReservationController::class);
Route::resource('clients.reservations', ClientReservationController::class)->only(['index']);