<?php

namespace App\Http\BL;
use App\Modelos\Alumno_Curso;
use App\Http\DAO\AlumnoCursoDAO;
class AlumnoCursoBL{
    public function crear($datos){
        $alumnoCurso = new Alumno_Curso;
        $alumnoCurso->alumno_id=$datos['alumno_id'];
        $alumnoCurso->curso_id=$datos['curso_id'];
        $alumnoCurso->estado=$datos['estado'];

        $alumnoCursoDao = new AlumnoCursoDAO;
        return $alumnoCursoDao->crear($alumnoCurso);
    }
}