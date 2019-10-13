<?php

namespace App\Http\BL;

use App\Http\DAO\SeccionDAO;
use App\Modelos\Seccion;
class SeccionBL{
    public function lista(){
        $seccionDao = new SeccionDAO;
        return $seccionDao->lista();
    }
    public function obtener($id){
        $seccionDao = new SeccionDAO;
        return $seccionDao->obtener($id);    
    }
    public function modificar($id,$datos){    
        $seccion=Seccion::find($id);
        $seccion->nombre=$datos['nombre'];
        $seccion->descripcion=$datos['descripcion'];

        $seccionDao = new SeccionDAO;
        return $seccionDao->modificar($seccion);    
    }
}