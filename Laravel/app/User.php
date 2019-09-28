<?php

namespace App;

use Laravel\Passport\HasApiTokens;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
class User extends Authenticatable
{
    use HasApiTokens, Notifiable;
    protected $fillable = [
        'nombre','apellido','carnet', 'email','telefono','password', 'tipo',
    ];
    protected $hidden = [
        'password', 'remember_token','created_at','updated_at',
    ];
}