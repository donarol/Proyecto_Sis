<?php

namespace App\Modelos;

use Illuminate\Database\Eloquent\Model;

class Camara_Curso extends Model
{
    //
    protected $table = "camaras_cursos";
    protected $primaryKey = "id"; 
    protected $hidden = ['created_at' ,'updated_at'];
}
