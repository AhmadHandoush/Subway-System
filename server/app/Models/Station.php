<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Station extends Model
{
    use HasFactory;
    public function manager()
    {
        return $this->belongsTo(Manager::class);
    }

    public function rides()
    {
        return $this->hasMany(Ride::class, 'departure_station_id');
    }
}