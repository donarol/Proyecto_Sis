<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\BL\TipoPlatoBL;
class TipoPlatoController extends Controller
{
    public function lista(){
        $tipoPlato = new TipoPlatoBL;
        return $tipoPlato->lista();
    }
    public function obtener($id){
        $tipoPlato = new TipoPlatoBL;
        return $tipoPlato->obtener($id);
    }
}
