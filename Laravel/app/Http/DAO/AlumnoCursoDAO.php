<?php

namespace App\Http\DAO;
use App\Modelos\Alumno_Curso;
class AlumnoCursoDAO{
    public function crear(Alumno_Curso $alumnoCurso){
        $alumnoCurso->save();
        return $alumnoCurso;
    }
}