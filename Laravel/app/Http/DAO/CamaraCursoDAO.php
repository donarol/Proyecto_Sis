<?php

namespace App\Http\DAO;
use App\Modelos\Camara_Curso;
class CamaraCursoDAO{
    public function crear(Camara_Curso $camaraCurso){
        $camaraCurso->save();
        return response()->json($camaraCurso,200);
    }
}