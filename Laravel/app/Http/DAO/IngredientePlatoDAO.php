<?php

namespace App\Http\DAO;
use App\Modelos\IngredientePlato;

class IngredientePlatoDAO{
    public function crear(IngredientePlato $ingredientePlato){
        $ingredientePlato->save();
        return $ingredientePlato;
        
    }
}