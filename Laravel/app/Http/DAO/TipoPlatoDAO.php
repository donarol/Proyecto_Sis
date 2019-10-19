<?php

namespace App\Http\DAO;
use App\Modelos\TipoPlato;

class TipoPlatoDAO{
    public function lista(){
        return TipoPlato::all();
    }
    public function obtener($id){
        return TipoPlato::find($id);
    }
}