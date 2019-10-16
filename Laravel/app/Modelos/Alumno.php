<?php

namespace App\Modelos;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Alumno extends Model
{
    //
    protected $table = "alumnos";
    protected $primaryKey = "alumno_id"; 
    protected $fillable = ['nombre','apellido','fecha_nacimiento','lugar_nacimiento','tipo_sanguineo','telefono','domicilio'];
    protected $hidden = ['created_at' ,'updated_at', 'deleted_at'];

    public function cursos(){
        return $this->belongsToMany('App\Modelos\Curso');
    }
}
