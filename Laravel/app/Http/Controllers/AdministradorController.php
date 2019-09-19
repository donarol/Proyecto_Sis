<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\CreateAdministradorRequest;
use App\Http\Requests\LoginAdministradorRequest;
use App\Http\BL\AdministradorBL;

use Illuminate\Support\Facades\Hash;
class AdministradorController extends Controller
{
    public function crear(CreateAdministradorRequest $request){
        $datos = $request->json()->all();
        $administrador = new AdministradorBL;
        return $administrador->crear($datos);
    }
    public function crearMal(){
        echo 'errro al crear cuenta administrador';
    }
    public function login(LoginAdministradorRequest $request){
        $datos = $request->json()->all();
        $administrador = new AdministradorBL;
        return $administrador->login($datos);
       /* $correo=$request->get('correo');
        $pass = hash('sha256', $request->get('contrasena'));
        echo 'correo: '.$correo." pass: ".$pass;*/
    }
    public function loginMal(){
        echo 'error al login';
    }
    public function obtener($id){
        $administrador = new AdministradorBL;
        return $administrador->obtener($id);
    }
    public function modificar($id,Request $request){
        $datos = $request->json()->all();
        $administrador = new AdministradorBL;
        return $administrador->modificar($id,$datos);
    }
}
