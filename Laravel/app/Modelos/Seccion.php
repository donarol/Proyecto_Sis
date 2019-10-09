<?php

namespace App\Modelos;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Seccion extends Model
{
    //
    protected $table = "secciones";
    protected $primaryKey = "seccion_id"; 
    protected $fillable = ['nombre','descripcion'];
    protected $hidden = ['created_at' ,'updated_at', 'deleted_at'];



}
