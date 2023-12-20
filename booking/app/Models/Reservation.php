<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Reservation extends Model
{
    use HasFactory;
    protected $fillable = [
        'apartment_id',
        'client_id',
        'check_in_date',
        'check_out_date',
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
