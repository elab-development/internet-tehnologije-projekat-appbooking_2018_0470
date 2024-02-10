<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Reservation;
class ClientReservationController extends Controller
{
    public function index($client_id)
    {
        $reservations = Reservation::get()->where('client_id',$client_id);
        if(is_null($reservations)){
            return response()->json('Data not found', 404);
        }
        return response()->json($reservations);
    }
}
