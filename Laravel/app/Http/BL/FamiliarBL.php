<?php

namespace App\Http\BL;

use App\Modelos\Persona;
use App\Modelos\Familiar;
use App\Http\DAO\FamiliarDAO;
use App\Http\DAO\PersonaDAO;
use Illuminate\Support\Facades\Hash;

class FamiliarBL{
    public function crear($datos){
        
        $persona = new Persona;
        $persona->nombre=$datos['nombre'];
        $persona->apellido=$datos['apellido'];
        
        $perDao = new PersonaDAO;
        $persona_id = $perDao->crear($persona);
        
        $familiar = new Familiar;
        $familiar->carnet=$datos['carnet'];
        $familiar->correo=$datos['correo'];
        $familiar->telefono=$datos['telefono'];
        $familiar->contrasena=hash('sha256', $datos['contrasena']);
        $familiar->persona_id=$persona_id;

        $famDao = new FamiliarDAO;
        return $famDao->crear($familiar);    
    }
    public function login($datos){
        $familiar = new Familiar;
        $familiar->correo=$datos['correo'];
        $familiar->contrasena=hash('sha256', $datos['contrasena']);
        $famDao = new FamiliarDAO;
        return $famDao->login($familiar);
    }
    public function obtener($id){
        $familiar = new FamiliarDAO;
        return $familiar->obtener($id);
    }
    public function modificar($id,$datos){
        $familiar = new FamiliarDAO;
        return $familiar->modificar($id,$datos);
    }
}