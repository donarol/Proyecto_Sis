<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\AlumnoUserCreateRequest;
use App\Http\BL\AlumnoUserBL;
class AlumnoUserController extends Controller
{
    public function crear(AlumnoUserCreateRequest $request){
        $datos = $request->json()->all();
        $alumnoUser = new alumnoUserBL;
        return $alumnoUser->crear($datos);
    }
    public function crearMal(){
        echo 'error al inscribir al alumno User';
    }
    public function obtener($id){
        $alumnoUser = new alumnoUserBL;
        return $alumnoUser->obtener($id);
    }
}
