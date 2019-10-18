<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\AlumnoCreateRequest;
use App\Http\BL\AlumnoBL;
class AlumnoController extends Controller
{
    public function crear(AlumnoCreateRequest $request){
        $datos = $request->json()->all();
        $alumno = new AlumnoBL;
        return $alumno->crear($datos);
    }
    public function crearMal(){
        echo 'error al crear cuenta alumno';
    }
}
