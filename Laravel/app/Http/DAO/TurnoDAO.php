<?php

namespace App\Http\DAO;
use App\Modelos\Turno;

class TurnoDAO{
    public function crear(Turno $turno){
        $turno->save();
        return $turno;
    }
    public function lista(){
        return Turno::all();
    }
    public function obtener($id){
        return Turno::find($id);
    }
    public function modificar(Turno $turno){
        $turno->save();
        return $turno;
    }
}