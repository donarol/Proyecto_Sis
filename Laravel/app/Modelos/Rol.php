<?php

namespace App\Modelos;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Rol extends Model
{
    //
    protected $table = "roles";
    protected $primaryKey = "rol_id"; 
    protected $fillable = ['nombre','caracteristicas'];
    protected $hidden = ['created_at' ,'updated_at', 'deleted_at'];



}
