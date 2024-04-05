<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Station extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'open_hour',
        'close_hour',
        'latitude',
        'longitude',
        'status',
        'image',
        'manager_id',
    ];

    public function manager()
    {
        return $this->belongsTo(Manager::class);
    }

    public function departureSchedules()
    {
        return $this->hasMany(Ride::class, 'departure_station_id');
    }

    public function arrivalSchedules()
    {
        return $this->hasMany(Ride::class, 'arrival_station_id');
    }

    public function getDepartureRideCountAttribute()
    {
        return $this->departureSchedules()->count();
    }

    public function getArrivalRideCountAttribute()
    {
        return $this->arrivalSchedules()->count();
    }
}
