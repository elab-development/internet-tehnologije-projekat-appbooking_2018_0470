<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Reservation extends Model
{
    use HasFactory;
    protected $fillable = [
        'price',
        'period',
        'check_in',
        'check_out',
        'client_id',
        'apartment_id',
    ];

    public function client()
    {
        return $this->belongsTo(Client::class);
    }

    public function apartment()
    {
        return $this->belongsTo(Apartment::class);
    }
}
