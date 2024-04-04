<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CoinRequest extends Model
{
    use HasFactory;
    protected $fillable = ['passenger_id', 'amount'];
    public function passenger()
    {
        return $this->belongsTo(Passenger::class);
    }

}
