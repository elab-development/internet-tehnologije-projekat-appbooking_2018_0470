<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Apartment extends Model
{
    use HasFactory;
    protected $fillable = [
        'apartment_id',
        'location',
        'address',
        'rate',
        'capacity',
    ];
  /*  public function reservations(){
        return $this->hasMany(Reservation::class);
    }*/
}

