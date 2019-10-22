<?php

namespace App\Http\DAO;
use App\Modelos\Plato;

class PlatoDAO{
    public function crear(Plato $plato){
        $plato->save();
        return $plato;
    }
    public function lista(){
        return Plato::all();
    }
    public function obtener($id){
        return Plato::find($id);
    }
    public function modificar(Plato $plato){
        $plato->save();
        return $plato;
    }
}