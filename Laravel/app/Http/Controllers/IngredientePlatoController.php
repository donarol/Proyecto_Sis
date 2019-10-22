<?php

namespace App\Http\Controllers;

use App\Http\Requests\IngredientePlatoCreateRequest;
use Illuminate\Http\Request;
use App\Http\BL\IngredientePlatoBL;

class IngredientePlatoController extends Controller
{
    public function crear(IngredientePlatoCreateRequest $request){
        $datos = $request->json()->all();
        $ingredientePlato = new IngredientePlatoBL;
        return $ingredientePlato->crear($datos);
        
    }
    public function crearMal(){
        echo 'error al crear ingredientePlato';
    }
}
