<?php

namespace App\Http\BL;

use App\Modelos\Ingrediente;
use App\Http\DAO\IngredienteDAO;

class IngredienteBL{
    public function crear($datos){    
        $ingrediente = new Ingrediente;
        $ingrediente->nombre=$datos['nombre'];

        $ingredienteDao = new IngredienteDAO;
        return $ingredienteDao->crear($ingrediente);    
    }
    public function lista(){
        $ingredienteDao = new IngredienteDAO;
        return $ingredienteDao->lista();
    }
    public function obtener($id){
        $ingredienteDao = new IngredienteDAO;
        return $ingredienteDao->obtener($id);    
    }
    public function modificar($id,$datos){    
        $ingrediente=Ingrediente::find($id);
        $ingrediente->nombre=$datos['nombre'];

        $ingredienteDao = new IngredienteDAO;
        return $ingredienteDao->modificar($ingrediente);    
    }

}