<?php

namespace App\Modelos;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Persona extends Model
{
    protected $table = "personas";
    protected $primaryKey = "persona_id"; 
    protected $fillable = ['nombre','apellido'];
    protected $hidden = ['created_at' ,'updated_at', 'deleted_at'];



}
