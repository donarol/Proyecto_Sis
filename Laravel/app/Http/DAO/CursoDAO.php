<?php

namespace App\Http\DAO;
use App\Modelos\Curso;

class CursoDAO{
    public function crear(Curso $curso){
        $curso->save();
        return $curso;
    }
    public function lista(){
        return Curso::all();
    }
    public function obtener($id){
        return Curso::find($id);
    }
    public function modificar(Curso $curso){
        $curso->save();
        return $curso;
    }
}