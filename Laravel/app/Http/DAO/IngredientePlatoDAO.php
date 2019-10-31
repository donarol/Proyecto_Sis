<?php

namespace App\Http\DAO;
use App\Modelos\Ingrediente_Plato;

class IngredientePlatoDAO{
    public function crear(Ingrediente_Plato $ingredientePlato){
        $ingredientePlato->save();
        return response()->json($ingredientePlato,200); 
    }
}