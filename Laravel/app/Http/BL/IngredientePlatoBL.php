<?php

namespace App\Http\BL;

use App\Modelos\Ingrediente_Plato;
use App\Http\DAO\IngredientePlatoDAO;

class IngredientePlatoBL{
    public function crear($datos){    
        $ingredientePlato = new Ingrediente_Plato;
        $ingredientePlato->plato_id=$datos['plato_id'];
        $ingredientePlato->ingrediente_id=$datos['ingrediente_id'];
        $ingredientePlato->cantidad=$datos['cantidad'];

        $ingredientePlatoDao = new IngredientePlatoDAO;
        return $ingredientePlatoDao->crear($ingredientePlato);    
    }
}