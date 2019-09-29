<?php

namespace App\Http\BL;

use App\Http\DAO\FamiliarDAO;

class FamiliarBL{
    public function obtener($id){
        $familiar = new FamiliarDAO;
        return $familiar->obtener($id);
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
        $familiar = new FamiliarDAO;
        return $familiar->modificar($id,$user);
    }
    public function lista(){
        $familiar = new FamiliarDAO;
        return $familiar->lista();
    }
}