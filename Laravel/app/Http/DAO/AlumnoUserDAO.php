<?php

namespace App\Http\DAO;
use App\Modelos\Alumno_User;
use App\Modelos\Alumno;
class AlumnoUserDAO{
    public function crear(Alumno_User $alumnoUser){
        if(Alumno_User::where([
            ['alumno_id', '=',$alumnoUser->alumno_id],
            ['user_id','=',$alumnoUser->user_id]
        ])->exists()){
            //Si alumno_id es 0 el Alumno ya esta relacionado con esta persona
            $alumnoUserError = new Alumno_User;
            $alumnoUserError->id='0';
            return response()->json($alumnoUserError,505);
        }else{
            $alumnoUser->save();
            return response()->json($alumnoUser,200);
        }
    }
    //MAL
    public function obtener($id){
        return response()->json(Alumno::find($id)->familiares,200);
    }
}