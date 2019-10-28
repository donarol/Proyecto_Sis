<?php

namespace App\Http\BL;

use App\Http\DAO\UserDAO;
use App\User;
class UserBL{
    public function obtener($id){
        $user = new UserDAO;
        return $user->obtener($id);
    }
    /*public function modificar($id,$datos){
        $user = new User([
            'nombre'=>$datos['nombre'],
            'apellido'=>$datos['apellido'],
            'carnet'=>$datos['carnet'],
            'email'=>$datos['email'],
            'telefono'=>$datos['telefono']
           // 'password'=>bcrypt($datos['password'])
        ]);
        $userDao = new UserDAO;
        return $userDao->modificar($id,$user);
    }*/
    public function modificar($id,$datos){    
        $user=User::find($id);
        $user->nombre=$datos['nombre'];
        $user->apellido=$datos['apellido'];
        $user->carnet=$datos['carnet'];
        $user->email=$datos['email'];
        $user->telefono=$datos['telefono'];

        $userDao = new UserDAO;
        return $userDao->modificar($user); 
    }
}