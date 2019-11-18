<?php

namespace App\Http\DAO;
use App\Modelos\Ingrediente_Plato;

class IngredientePlatoDAO{
    public function crear(Ingrediente_Plato $ingredientePlato){
        if(Ingrediente_Plato::where([
            ['ingrediente_id', '=',$ingredientePlato->ingrediente_id],
            ['plato_id','=',$ingredientePlato->plato_id]
        ])->exists()){
            $ingredientePlatoError = new Ingrediente_Plato;
            $ingredientePlatoError->ingrediente_plato_id='0';
            return response()->json($ingredientePlatoError,505);
        }else{
            $ingredientePlato->save();
            return response()->json($ingredientePlato,200); 
        }
    }
}