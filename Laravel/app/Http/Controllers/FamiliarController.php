<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\CreateFamiliarRequest;
use App\Http\Requests\LoginFamiliarRequest;
use App\Http\BL\FamiliarBL;
use Illuminate\Support\MessageBag;

class FamiliarController extends Controller
{
    public function crear(CreateFamiliarRequest $request){
        $datos = $request->json()->all();
        $familiar = new FamiliarBL;
        return $familiar->crear($datos);
    }
    public function crearMal(){
        echo 'errro al crear cuenta';
    }
    public function login(LoginFamiliarRequest $request){
        $datos = $request->json()->all();
        $familiar = new FamiliarBL;
        return $familiar->login($datos);
    }
    public function loginMal(){
        echo 'error al login';
    }
    public function obtener($id){
        $familiar = new FamiliarBL;
        return $familiar->obtener($id);
    }
    public function modificar($id,Request $request){
        $datos = $request->json()->all();
        $familiar = new FamiliarBL;
        return $familiar->modificar($id,$datos);
    }
}
