<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\BL\AdministradorBL;
class AdministradorController extends Controller
{
    public function lista(){
        $administrador = new AdministradorBL;
        return $administrador->lista();
    }
    public function cursos($id){
        $administrador = new AdministradorBL;
        return $administrador->cursos();
    }
}
