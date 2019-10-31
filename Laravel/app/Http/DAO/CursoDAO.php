<?php

namespace App\Http\DAO;
use App\Modelos\Curso;

class CursoDAO{
    public function crear(Curso $curso){
        $curso->save();
        return response()->json($curso,200);
    }
    public function lista(){
        return Curso::all();
    }
    public function obtener($id){
        return response()->json(Curso::find($id),200);
    }
    public function modificar(Curso $curso){
        $curso->save();
        return response()->json($curso,200);
    }
    public function miDocente($id){
        return response()->json(Curso::find($id)->user,200);
        
    }
    public function miSeccion($id){
        return response()->json(Curso::find($id)->seccion,200);
    }
    public function miTurno($id){
        return response()->json(Curso::find($id)->turno,200);
    }
}