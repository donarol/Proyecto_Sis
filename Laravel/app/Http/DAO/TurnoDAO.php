<?php

namespace App\Http\DAO;
use App\Modelos\Turno;

class TurnoDAO{
    public function crear(Turno $turno){
        $turno->save();
        return response()->json($turno,200);
    }
    public function lista(){
        return Turno::all();
       /*return response()->json([
            'turnos' => Turno::all(),
            'message' => 'cargado exitosamente'
        ]);*/
    }
    public function obtener($id){
        return response()->json(Turno::find($id),200);
    }
    public function modificar(Turno $turno){
        $turno->save();
        return response()->json($turno,200);
    }
}