<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Predmet extends Model
{
     protected $fillable = [
        'profesor_id',
        'naziv',
        'sifra',
        'godina_studija',
    ];

}