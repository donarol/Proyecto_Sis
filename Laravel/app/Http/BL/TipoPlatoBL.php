<?php

namespace App\Http\BL;

use App\Http\DAO\TipoPlatoDAO;
class TipoPlatoBL{
    public function lista(){
        $tipoPlato = new TipoPlatoDAO;
        return $tipoPlato->lista();
    }
    public function obtener($id){
        $tipoPlato = new TipoPlatoDAO;
        return $tipoPlato->obtener($id);    
    }
}