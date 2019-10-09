<?php

namespace App\Http\DAO;
use App\Modelos\Seccion;

class SeccionDAO{
    public function lista(){
        return Seccion::all();
    }
    public function obtener($id){
        return Seccion::find($id);
    }
    public function modificar(Seccion $seccion){
        $seccion->save();
        return $seccion;
    }
}