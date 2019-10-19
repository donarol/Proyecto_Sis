<?php

namespace App\Http\Controllers;
use App\Http\Requests\IngredienteCreateRequest;
use Illuminate\Http\Request;
use App\Http\BL\IngredienteBL;
class IngredienteController extends Controller
{
    public function crear(IngredienteCreateRequest $request){
        $datos = $request->json()->all();
        $ingrediente = new IngredienteBL;
        return $ingrediente->crear($datos);
    }
    public function crearMal(){
        echo 'error al crear ingrediente';
    }
    public function lista(){
        $ingrediente = new IngredienteBL;
        return $ingrediente->lista();
    }
    public function obtener($id){
        $ingrediente = new IngredienteBL;
        return $ingrediente->obtener($id);
    }
    public function modificar($id,IngredienteCreateRequest $request){
        $datos = $request->json()->all();
        $ingrediente = new IngredienteBL;
        return $ingrediente->modificar($id,$datos);
    }
}
