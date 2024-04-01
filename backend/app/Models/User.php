<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use HasFactory, Notifiable;

    // use Illuminate\Database\Eloquent\Model;

    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }

    public function passenger()
    {
        return $this->hasOne(Passenger::class);
    }

    public function manager()
    {
        return $this->hasOne(Manager::class);
    }

    public function headquarters()
    {
        return $this->hasOne(Headquarter::class);
    }

    public function senderChats()
    {
        return $this->hasMany(Chat::class, 'sender_id');
    }

    public function recipientChats()
    {
        return $this->hasMany(Chat::class, 'recipient_id');
    }
}
