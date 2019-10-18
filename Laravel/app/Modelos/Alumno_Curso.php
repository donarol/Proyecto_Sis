<?php

namespace App\Modelos;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Alumno_Curso extends Model
{
    //
    protected $table = "alumnos_cursos";
    protected $primaryKey = "alumno_curso_id"; 
    protected $hidden = ['created_at' ,'updated_at', 'deleted_at'];

}
