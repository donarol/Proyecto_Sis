<?php

namespace App\Http\DAO;
use App\Modelos\Alumno_Curso;
use App\Modelos\Alumno;
use App\Modelos\Curso;
class AlumnoCursoDAO{
    public function crear(Alumno_Curso $alumnoCurso){
        if(Alumno_Curso::where([
            ['alumno_id', '=',$alumnoCurso->alumno_id],
            ['curso_id','=',$alumnoCurso->curso_id]
        ])->exists()){
            //Si alumno_id es 0 el Alumno ya esta inscrito en este curso
            $alumnoCursoError = new Alumno_Curso;
            $alumnoCursoError->alumno_curso_id='0';
            return response()->json($alumnoCursoError,505);
        }else{
            $alumnoCurso->save();
            return response()->json($alumnoCurso,200);
        }
    }
    public function obtener($id){
        return response()->json(Alumno::find($id)->cursos,200);
    }
}