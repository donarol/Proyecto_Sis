<?php

namespace App\Http\DAO;
use App\Modelos\Alumno;
class AlumnoDAO{
    public function crear(Alumno $alumno){
        $alumno->save();
        return response()->json($alumno,200);
    }
}