<?php

namespace App\Http\BL;

use App\Modelos\Persona;
use App\Modelos\Administrador;
use App\Http\DAO\AdministradorDAO;
use App\Http\DAO\PersonaDAO;
use Illuminate\Support\Facades\Hash;

class AdministradorBL{
    public function crear($datos){
        
        $persona = new Persona;
        $persona->nombre=$datos['nombre'];
        $persona->apellido=$datos['apellido'];
        
        $perDao = new PersonaDAO;
        $persona_id = $perDao->crear($persona);
        
        $administrador = new Administrador;
        $administrador->carnet=$datos['carnet'];
        $administrador->telefono=$datos['telefono'];
        $administrador->contrasena=hash('sha256', $datos['contrasena']);
        $administrador->cargo=$datos['cargo'];
        $administrador->correo=$datos['correo'];
        $administrador->persona_id=$persona_id;

        $admDao = new AdministradorDAO;
        return $admDao->crear($administrador);    
    }

    public function login($datos){
        $administrador = new Administrador;
        $administrador->correo=$datos['correo'];
        $administrador->contrasena=hash('sha256', $datos['contrasena']);
        $admDao = new AdministradorDAO;
        return $admDao->login($administrador);
    }
    public function obtener($id){
        $administrador = new AdministradorDAO;
        return $administrador->obtener($id);
    }
    public function modificar($id,$datos){
        $administrador = new AdministradorDAO;
        return $administrador->modificar($id,$datos);
    }
}