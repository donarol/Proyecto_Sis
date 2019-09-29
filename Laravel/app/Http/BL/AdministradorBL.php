<?php

namespace App\Http\BL;

use App\Http\DAO\AdministradorDAO;

class AdministradorBL{
    public function obtener($id){
        $administrador = new AdministradorDAO;
        return $administrador->obtener($id);
    }
    public function modificar($id,$datos){
        $user = new User([
            'nombre'=>$datos['nombre'],
            'apellido'=>$datos['apellido'],
            'carnet'=>$datos['carnet'],
            'email'=>$datos['email'],
            'telefono'=>$datos['telefono'],
            'password'=>bcrypt($datos['password'])
        ]);
        $administrador = new AdministradorDAO;
        return $administrador->modificar($id,$user);
    }
    public function lista(){
        $administrador = new AdministradorDAO;
        return $administrador->lista();
    }
}