<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\CamaraCreateRequest;

use App\Http\BL\CamaraBL;
class CamaraController extends Controller
{
    //
    public function crear(CamaraCreateRequest $request){
        $datos = $request->json()->all();
        $camara = new CamaraBL;
        return $camara->crear($datos);
    }    
    public function crearMal(){
        echo 'error al crear Camara';
    }
    public function lista(){
        $camara = new CamaraBL;
        return $camara->lista();
    }   
    public function obtener($id){
        $camara = new CamaraBL;
        return $camara->obtener($id);
    }
    public function modificar($id,CamaraCreateRequest $request){
        $datos = $request->json()->all();
        $camara = new CamaraBL;
        return $camara->modificar($id,$datos);
    }
}
