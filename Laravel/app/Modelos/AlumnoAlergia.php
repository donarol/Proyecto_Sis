<?php

namespace App\Modelos;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class AlumnoAlergia extends Model
{
    //
    protected $table = "alumnos_alergias";
    protected $primaryKey = "alumno_alergia_id"; 
//    protected $fillable = ['nombre','apellido'];
    protected $hidden = ['created_at' ,'updated_at', 'deleted_at'];

}
