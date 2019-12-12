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
        $alumno->certificado_vacuna=$datos['certificado_vacuna'];
        $alumno->rude=$datos['rude'];
        $alumno->certificado_nacimiento=$datos['certificado_nacimiento'];

        $alumnoDao = new AlumnoDAO;
        return $alumnoDao->crear($alumno);
    }
    public function modificar($id,$datos){    
        $alumno=Alumno::find($id);
        $alumno->nombre=$datos['nombre'];
        $alumno->apellido=$datos['apellido'];
        $alumno->fecha_nacimiento=$datos['fecha_nacimiento'];
        $alumno->lugar_nacimiento=$datos['lugar_nacimiento'];
        $alumno->tipo_sanguineo=$datos['tipo_sanguineo'];
        $alumno->telefono=$datos['telefono'];
        $alumno->domicilio=$datos['domicilio'];
        $alumno->certificado_vacuna=$datos['certificado_vacuna'];
        $alumno->rude=$datos['rude'];
        $alumno->certificado_nacimiento=$datos['certificado_nacimiento'];

        $alumnoDao = new AlumnoDAO;
        return $alumnoDao->modificar($alumno);    
    }
    public function obtener($id){
        $alumnoDao = new AlumnoDAO;
        return $alumnoDao->obtener($id);    
    }
    public function familiares($id){
        $alumnoDao = new AlumnoDAO;
        return $alumnoDao->familiares($id);
    }
}