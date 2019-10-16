<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\AlumnoCursoCreateRequest;
use App\Http\BL\AlumnoCursoBL;
class AlumnoCursoController extends Controller
{
    public function crear(Request $request){
        $datos = $request->json()->all();
        $alumnoCurso = new AlumnoCursoBL;
        return $alumnoCurso->crear($datos);
    }
    public function crearMal(){
        echo 'error al inscribir al alumno';
    }
}
