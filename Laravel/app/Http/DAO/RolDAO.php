<?php

namespace App\Http\DAO;
use App\Modelos\Rol;

class RolDAO{
    public function lista(){
        return Rol::all();
    }
    public function obtener($id){
        return Rol::find($id);
    }
}