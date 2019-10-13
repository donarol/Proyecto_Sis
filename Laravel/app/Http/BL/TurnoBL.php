<?php

namespace App\Http\BL;

use App\Modelos\Turno;
use App\Http\DAO\TurnoDAO;

class TurnoBL{
    public function crear($datos){    
        $turno = new Turno;
        $turno->nombre=$datos['nombre'];
        $turno->monto=$datos['monto'];
        $turno->gestion=$datos['gestion'];
        $turno->hora_inicio=$datos['hora_inicio'];
        $turno->hora_fin=$datos['hora_fin'];

        $turnoDao = new TurnoDAO;
        return $turnoDao->crear($turno);    
    }
    public function lista(){
        $turnoDao = new TurnoDAO;
        return $turnoDao->lista();
    }
    public function obtener($id){
        $turnoDao = new TurnoDAO;
        return $turnoDao->obtener($id);    
    }
    public function modificar($id,$datos){    
        $turno=Turno::find($id);
        $turno->nombre=$datos['nombre'];
        $turno->monto=$datos['monto'];
        $turno->gestion=$datos['gestion'];
        $turno->hora_inicio=$datos['hora_inicio'];
        $turno->hora_fin=$datos['hora_fin'];

        $turnoDao = new TurnoDAO;
        return $turnoDao->modificar($turno);    
    }

}