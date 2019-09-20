<?php

namespace App\Http\JsonNew;

use App\Modelos\Administrador;
use App\Modelos\Persona;

class Administrador_Persona{
    public function administradorPersona(Administrador $administrador,Persona $persona){
        $res=array(
            'administador_id'=>$administrador->administrador_id,
            'nombre'=>$persona->nombre,
            'apellido'=>$persona->apellido,
            'carnet'=>$administrador->carnet,
            'correo'=>$administrador->correo,
            'cargo'=>$administrador->cargo,
            'telefono'=>$administrador->telefono
        );  
        return $res; 
    }
}