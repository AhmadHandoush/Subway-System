<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Passenger extends Model
{
    protected $fillable = ['user_id', 'balance'];
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function passes()
    {
        return $this->hasMany(Pass::class);
    }

    public function tickets()
    {
        return $this->hasMany(Ticket::class);
    }

    public function coinRequests()
    {
        return $this->hasMany(CoinRequest::class);
    }

    public function rideReviews()
    {
        return $this->hasMany(RideReview::class);
    }

    use HasFactory;
}
