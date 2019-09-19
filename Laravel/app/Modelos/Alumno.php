<?php

namespace App\Modelos;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Alumno extends Model
{
    //
    protected $table = "alumnos";
    protected $primaryKey = "alumno_id"; 
    protected $fillable = ['fecha_nacimiento','sanguineo','domicilio','celular','foto','certificado_vacuna','certificado_nacimiento','fecha','fecha_nacimiento','croquis'];
    protected $hidden = ['created_at' ,'updated_at', 'deleted_at'];

    public function persona(){
        return $this->hasOne('App\Modelos\Persona','persona_id','persona_id');
    }
}
