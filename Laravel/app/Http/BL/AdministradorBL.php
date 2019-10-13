<?php

namespace App\Http\BL;

use App\Http\DAO\AdministradorDAO;

class AdministradorBL{
    public function lista(){
        $administrador = new AdministradorDAO;
        return $administrador->lista();
    }
    public function cursos($id){
        $administrador = new AdministradorDAO;
        return $administrador->cursos($id);
    }
}