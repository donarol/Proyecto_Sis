<?php

namespace App\Http\DAO;
use App\Modelos\Turno;

class TurnoDAO{
    public function crear(Turno $turno){
        if(Turno::where([
            ['nombre', '=',$turno->nombre],
            ['gestion','=',$turno->gestion]
        ])->exists()){
            $turnoError = new Turno;
            $turnoError->turno_id="0";
            return response()->json($turnoError,505);
        }else{
            $turno->save();
            return response()->json($turno,200);
        }
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
       /* if(Turno::where([
            ['nombre', '=',$turno->nombre],
            ['gestion','=',$turno->gestion]
        ])->exists()){
            $turno->turno_id="0";
            return response()->json($turno,505);
        }else{*/
            $turno->save();
            return response()->json($turno,200);
       // }
    }
    
}