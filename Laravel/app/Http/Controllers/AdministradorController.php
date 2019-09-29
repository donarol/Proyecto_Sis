<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\BL\AdministradorBL;

use Illuminate\Support\Facades\Hash;
class AdministradorController extends Controller
{
    public function obtener($id){
        $administrador = new AdministradorBL;
        return $administrador->obtener($id);
    }
    public function modificar($id,Request $request){
        $datos = $request->json()->all();
        $administrador = new AdministradorBL;
        return $administrador->modificar($id,$datos);
    }
    public function lista(){
        $administrador = new AdministradorBL;
        return $administrador->lista();
    }
}
