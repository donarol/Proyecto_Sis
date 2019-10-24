<?php

namespace App\Http\Controllers;

use App\Http\Requests\PlatoCreateRequest;
use Illuminate\Http\Request;
use App\Http\BL\PlatoBL;

class PlatoController extends Controller
{
    public function crear(PlatoCreateRequest $request){
        $datos = $request->json()->all();
        $plato = new PlatoBL;
        return $plato->crear($datos);
    }
    public function crearMal(){
        echo 'error al crear plato';
    }
    public function lista(){
        $plato = new PlatoBL;
        return $plato->lista();
    }
    public function obtener($id){
        $plato = new PlatoBL;
        return $plato->obtener($id);
    }
    public function modificar($id,PlatoCreateRequest $request){
        $datos = $request->json()->all();
        $plato = new PlatoBL;
        return $plato->modificar($id,$datos);
    }
    public function obtenerFecha($fecha){
        $plato = new PlatoBL;
        return $plato->obtenerFecha($fecha);
    }
    public function ingredientes($id){
        $plato = new PlatoBL;
        return $plato->ingredientes($id);
    }
}
