<?php

namespace App\Http\DAO;
use App\Modelos\Alumno_User;
use App\Modelos\Alumno;
class AlumnoUserDAO{
    public function crear(Alumno_User $alumnoUser){
        $alumnoUser->save();
        return response()->json($alumnoUser,200);
    }
    public function obtener($id){
        return response()->json(Alumno::find($id)->familiares,200);
    }
}