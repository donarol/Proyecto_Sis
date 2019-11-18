<?php

namespace App\Http\DAO;
use App\Modelos\Alumno;
class AlumnoDAO{
    public function crear(Alumno $alumno){
        if(Alumno::where([
            ['nombre', '=',$alumno->nombre],
            ['apellido','=',$alumno->apellido],
            ['fecha_nacimiento','=',$alumno->fecha_nacimiento]
        ])->exists()){
            $alumnoError = new Alumno;
            $alumnoError->alumno_id='0';
            return response()->json($alumnoError,505);
        }else{
            $alumno->save();
            return response()->json($alumno,200);
        }
       /* $alumno->save();
        return response()->json($alumno,200);*/
    }
}