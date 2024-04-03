<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Manager extends Model
{
    use HasFactory;
use App\Models\Station;

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function station()
    {
        return $this->hasOne(Station::class);
    }
}
