<?php

namespace App\Http\DAO;
use App\User;

class AdministradorDAO{

    public function lista(){
       return User::whereIn('tipo',['Administrador','Docente'])->get();
    }
    public function cursos($id){
        return User::find($id)->cursos;
    }
    /*
    $variable=Tabla::where('campoA','=','1')
    ->orWhere('campoA','=','2')
    ->orderBy('id')
    ->get();
    */
}