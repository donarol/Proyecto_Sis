<?php

namespace App\Http\DAO;
use App\Modelos\Alumno_User;
class AlumnoUserDAO{
    public function crear(Alumno_User $alumnoUser){
        $alumnoUser->save();
        return $alumnoUser;
    }
}