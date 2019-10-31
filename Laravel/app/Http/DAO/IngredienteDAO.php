<?php

namespace App\Http\DAO;
use App\Modelos\Ingrediente;

class IngredienteDAO{
    public function crear(Ingrediente $ingrediente){
        $ingrediente->save();
        return response()->json($ingrediente,200);
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