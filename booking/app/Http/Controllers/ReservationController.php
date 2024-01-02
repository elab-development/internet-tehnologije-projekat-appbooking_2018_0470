<?php

namespace App\Http\Controllers;

use App\Models\Reservation;
use Illuminate\Http\Request;
use App\Http\Resources\ReservationResource;
use App\Http\Resources\ReservationCollection;
use Validator;
class ReservationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $reservations=Reservation::all();
        //return ReservationResource::collection($reservations);
        //return new ReservationCollection($reservations);
        $filtered = $reservations->where('check_in_date', '>=', '2023-05-06');//->where('name', 'like', '%a%');
        return $filtered;
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        
        $validator = Validator::make($request->all(), [
            'apartment_id' => 'required',
            'client_id' => 'required',
            'check_in_date' => 'required|date',
            'check_out_date' => 'required|date|after:check_in_date',
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 400);
        }

        // Add additional logic if needed, e.g., checking if the apartment and client exist

        $reservation = Reservation::create([
            'apartment_id' => $request->apartment_id,
            'client_id' => $request->client_id,
            'check_in_date' => $request->check_in_date,
            'check_out_date' => $request->check_out_date,
        ]);

        return response()->json(['Reservation created successfully.',new ReservationResource($reservation)]);
    }
    
    
    

    /**
     * Display the specified resource.
     */
    public function show(Reservation $reservation)
    {
        return new ReservationResource($reservation);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Reservation $reservation)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Reservation $reservation)
    {
        $validator = Validator::make($request->all(), [
            'apartment_id' => 'required',
            'client_id' => 'required',
            'check_in_date' => 'required|date',
            'check_out_date' => 'required|date|after:check_in_date',
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 400);
        }

        $reservation->apartment_id = $request->apartment_id;
        $reservation->client_id = $request->client_id;
        $reservation->check_in_date = $request->check_in_date;
        $reservation->check_out_date = $request->check_out_date;

        $reservation->save();
        return response()->json(['Reservation updated sucessfully.', new ReservationResource($reservation)]);


    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Reservation $reservation)
    {
        $reservation->delete();
        return response()->json('Reservation deleted successfully');
    }
}
