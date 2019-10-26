<?php

namespace App\Modelos;

use Illuminate\Database\Eloquent\Model;

class Alumno_User extends Model
{
    protected $table = "alumnos_users";
    protected $primaryKey = "id"; 
    protected $hidden = ['created_at' ,'updated_at', 'deleted_at'];
}
