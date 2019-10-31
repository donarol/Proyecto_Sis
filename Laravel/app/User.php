<?php

namespace App;

use Laravel\Passport\HasApiTokens;
use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
class User extends Authenticatable implements MustVerifyEmail
{
    use HasApiTokens, Notifiable;
    protected $fillable = [
        'nombre','apellido','carnet', 'email','telefono','password', 'tipo','email_verified_at',
    ];
    protected $hidden = [
        'password', 'remember_token','created_at','updated_at',
    ];
    public function cursos(){
        return $this->hasMany('App\Modelos\Curso');
    }
}