<?php

namespace App\Http\JsonNew;

use App\Modelos\Familiar;
use App\Modelos\Persona;

class Familiar_Persona{
    public function familiarPersona(Familiar $familiar,Persona $persona){
        $res=array(
            'familiar_id'=>$familiar->familiar_id,
            'nombre'=>$persona->nombre,
            'apellido'=>$persona->apellido,
            'carnet'=>$familiar->carnet,
            'correo'=>$familiar->correo,
            'telefono'=>$familiar->telefono
        );  
        return $res; 
    }
}
