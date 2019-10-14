<?php

namespace App\Http\BL;
use App\Modelos\Alumno;
use App\Http\DAO\AlumnoDAO;
class AlumnoBL{
    public function crear($datos){
        $alumno = new Alumno;
        $alumno->nombre=$datos['nombre'];
        $alumno->apellido=$datos['apellido'];
        $alumno->fecha_nacimiento=$datos['fecha_nacimiento'];
        $alumno->lugar_nacimiento=$datos['lugar_nacimiento'];
        $alumno->tipo_sanguineo=$datos['tipo_sanguineo'];
        $alumno->telefono=$datos['telefono'];
        $alumno->domicilio=$datos['domicilio'];

        $alumnoDao = new AlumnoDAO;
        return $alumnoDao->crear($alumno);
    }
}