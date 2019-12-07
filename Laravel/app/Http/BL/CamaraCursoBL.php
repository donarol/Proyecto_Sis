<?php

namespace App\Http\BL;
use App\Modelos\Camara_Curso;
use App\Http\DAO\CamaraCursoDAO;
class CamaraCursoBL{
    public function crear($datos){
        $camaraCurso = new Camara_Curso;
        $camaraCurso->camara_id=$datos['camara_id'];
        $camaraCurso->curso_id=$datos['curso_id'];

        $camaraCursoDao = new CamaraCursoDAO;
        return $camaraCursoDao->crear($camaraCurso);
    }
}