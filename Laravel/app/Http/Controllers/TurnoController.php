<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\CreateTurnoRequest;
use App\Http\BL\TurnoBL;
class TurnoController extends Controller
{
    public function crear(CreateTurnoRequest $request){
        $datos = $request->json()->all();
        $turno = new TurnoBL;
        return $turno->crear($datos);
    }
    public function crearMal(){
        echo 'error al crear turno';
    }
    public function lista(){
        $turno = new TurnoBL;
        return $turno->lista();
    }
    public function obtener($id){
        $turno = new TurnoBL;
        return $turno->obtener($id);
    }
    public function modificar($id,CreateTurnoRequest $request){
        $datos = $request->json()->all();
        $turno = new TurnoBL;
        return $turno->modificar($id,$datos);
    }
    public function borrar($id){
        $turno = new TurnoBL;
        return $turno->borrar($id);
    }
}
