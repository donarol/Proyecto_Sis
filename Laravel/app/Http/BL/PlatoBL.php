<?php

namespace App\Http\BL;

use App\Modelos\Plato;
use App\Http\DAO\PlatoDAO;

class PlatoBL{
    public function crear($datos){    
        $plato = new Plato;
        $plato->nombre=$datos['nombre'];
        $plato->preparacion=$datos['preparacion'];
        $plato->fecha=$datos['fecha'];
        $platoDao = new PlatoDAO;
        return $platoDao->crear($plato);    
    }
    public function lista(){
        $platoDao = new PlatoDAO;
        return $platoDao->lista();
    }
    public function obtener($id){
        $platoDao = new PlatoDAO;
        return $platoDao->obtener($id);    
    }
    public function modificar($id,$datos){    
        $plato=Plato::find($id);
        $plato->nombre=$datos['nombre'];
        $plato->preparacion=$datos['preparacion'];
        $plato->fecha=$datos['fecha'];

        $platoDao = new PlatoDAO;
        return $platoDao->modificar($plato);    
    }
    public function obtenerFecha($fecha){
        $platoDao = new PlatoDAO;
        return $platoDao->obtenerFecha($fecha);    
    }
    public function ingredientes($id){
        $platoDao = new PlatoDAO;
        return $platoDao->ingredientes($id);
    }

}