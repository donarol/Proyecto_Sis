<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\BL\CursoBL;
use App\Http\Requests\CursoCreateRequest;
class CursoController extends Controller
{
    public function crear(CursoCreateRequest $request){
        $datos = $request->json()->all();
        $curso = new CursoBL;
        return $curso->crear($datos);
    }   
    public function crearMal(){
        echo 'error al crear Curso';
    }
    public function lista(){
        $curso = new CursoBL;
        return $curso->lista();
    }   
    public function modificar($id,CursoCreateRequest $request){
        $datos = $request->json()->all();
        $curso = new CursoBL;
        return $curso->modificar($id,$datos);
    }
    public function obtener($id){
        $curso = new CursoBL;
        return $curso->obtener($id);
    }
}
