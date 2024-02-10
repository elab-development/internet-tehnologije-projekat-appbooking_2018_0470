<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Apartment extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'description',
        'price',
        'capacity',
        'available',
        'bedrooms',
    ];
    public function reservation()
    {
        return $this->hasMany(Reservation::class);
    }
}
