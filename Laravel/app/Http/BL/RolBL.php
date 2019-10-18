<?php

namespace App\Http\BL;

use App\Http\DAO\RolDAO;

class RolBL{
    public function lista(){
        $rolDao = new RolDAO;
        return $rolDao->lista();
    }
    public function obtener($id){
        $rolDao = new RolDAO;
        return $rolDao->obtener($id);
    }
}