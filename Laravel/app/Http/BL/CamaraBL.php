<?php

namespace App\Http\BL;

use App\Http\DAO\CamaraDAO;
use App\Modelos\Camara;
class CamaraBL{
    public function crear($datos){    
        $camara = new Camara;
        $camara->nombre=$datos['nombre'];
        $camara->address=$datos['address'];

        $camaraDao = new CamaraDAO;
        return $camaraDao->crear($camara);    
    }
    public function lista(){
        $camaraDao = new CamaraDAO;
        return $camaraDao->lista();
    }
    public function obtener($id){
        $camaraDao = new CamaraDAO;
        return $camaraDao->obtener($id);    
    }

    public function modificar($id,$datos){    
        $camara=Camara::find($id);
        $camara->nombre=$datos['nombre'];
        $camara->address=$datos['address'];

        $camaraDao = new CamaraDAO;
        return $camaraDao->modificar($camara);    
    }

}