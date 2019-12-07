<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests\CamaraCursoCreateRequest;

use App\Http\BL\CamaraCursoBL;
class CamaraCursoController extends Controller
{
    public function crear(CamaraCursoCreateRequest $request){
        $datos = $request->json()->all();
        $camara = new CamaraCursoBL;
        return $camara->crear($datos);
    }  
}
