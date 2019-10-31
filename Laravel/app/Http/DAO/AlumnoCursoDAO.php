<?php

namespace App\Http\DAO;
use App\Modelos\Alumno_Curso;
use App\Modelos\Alumno;
class AlumnoCursoDAO{
    public function crear(Alumno_Curso $alumnoCurso){
        $alumnoCurso->save();
        return response()->json($alumnoCurso,200);
    }
    public function obtener($id){
        return response()->json(Alumno::find($id)->cursos,200);
    }
}