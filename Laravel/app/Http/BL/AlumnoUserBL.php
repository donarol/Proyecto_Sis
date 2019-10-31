<?php

namespace App\Http\BL;
use App\Modelos\Alumno_User;
use App\Http\DAO\AlumnoUserDAO;
class AlumnoUserBL{
    public function crear($datos){
        $alumnoUser = new Alumno_User;
        $alumnoUser->alumno_id=$datos['alumno_id'];
        $alumnoUser->user_id=$datos['user_id'];
        $alumnoUser->parentesco=$datos['parentesco'];

        $alumnoUserDao = new AlumnoUserDAO;
        return $alumnoUserDao->crear($alumnoUser);
    }
    public function obtener($id){
        $alumnoUser = new AlumnoUserDAO;
        return $alumnoUser->obtener($id);    
    }
}