<?php

namespace App\Http\DAO;
use App\Modelos\Seccion;

class SeccionDAO{
    public function lista(){
        return Seccion::all();
    }
    public function obtener($id){
        return response()->json(Seccion::find($id),200);
    }
    public function modificar(Seccion $seccion){
        $seccion->save();
        return response()->json($seccion,200);
    }
}