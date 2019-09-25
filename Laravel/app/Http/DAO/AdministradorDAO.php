<?php

namespace App\Http\DAO;
use App\Modelos\Administrador;
use App\Http\JsonNew\Administrador_Persona;

class AdministradorDAO{
    public function crear(Administrador $administrador){
        $administrador->save();
        return $administrador;
    }
    public function login(Administrador $administrador){
        $administrador=Administrador::where(array(
            'correo'=>$administrador->correo,
            'contrasena'=>$administrador->contrasena
            )
        )->first();
        
        return $administrador;
    }
    public function obtener($id){
        $administrador=Administrador::find($id);
        $persona=Administrador::find($id)->persona;
        $admPer = new Administrador_Persona;
        return $admPer->administradorPersona($administrador,$persona);
    }
    public function modificar($id,$datos){
        
        $administrador = Administrador::find($id);
        $administrador->carnet=$datos['carnet'];
        $administrador->correo=$datos['correo'];
        $administrador->telefono=$datos['telefono'];
        $administrador->cargo=$datos['cargo'];
        $persona = Administrador::find($id)->persona;
        $persona->nombre=$datos['nombre'];
        $persona->apellido=$datos['apellido'];
     
        $administrador->save();
        $persona->save();
        $admPer = new Administrador_Persona;
        return $admPer->administradorPersona($administrador,$persona);
    }
    //modificar los datos persona
    public function lista(){
        return Administrador::all();
    }
}