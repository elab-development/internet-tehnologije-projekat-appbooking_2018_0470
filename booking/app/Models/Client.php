<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Client extends Model
{
    use HasFactory;
    protected $table = 'clients';

    protected $primaryKey = 'id';
    protected $fillable = [
        'name',
        'email',
        'email_verified_at',
        'phone',
        'password',

        
    ];
}
