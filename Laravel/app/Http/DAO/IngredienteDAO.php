<?php

namespace App\Http\DAO;
use App\Modelos\Ingrediente;

class IngredienteDAO{
    public function crear(Ingrediente $ingrediente){
        if(Ingrediente::where([
            ['nombre', '=',$ingrediente->nombre]
        ])->exists()){
            $ingredienteError = new Ingrediente;
            $ingredienteError->id='0';
            return response()->json($ingredienteError,505);
        }else{
            $ingrediente->save();
            return response()->json($ingrediente,200);
        }
    }
    public function lista(){
        return Ingrediente::all();
    }
    public function obtener($id){
        return Ingrediente::find($id);
    }
    public function modificar(Ingrediente $ingrediente){
        $ingrediente->save();
        return $ingrediente;
    }
}