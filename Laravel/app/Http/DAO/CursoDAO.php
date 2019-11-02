<?php

namespace App\Http\DAO;
use App\Modelos\Curso;

class CursoDAO{
 
    public function crear(Curso $curso){
        $curso->save();
        return response()->json($curso,200);
    }
    public function lista(){
        return Curso::all();
    }
    public function obtener($id){
        return response()->json(Curso::find($id),200);
    }
    public function obtenerLista(Curso $curso){
        global $seccion;
        $seccion=$curso->seccion_id;
        global $turno;
        $turno=$curso->turno_id;
        $curso = Curso::
        join('secciones', function ($join) {
            global $seccion;
            $join->on('cursos.seccion_id', '=', 'secciones.seccion_id')
                ->where('secciones.seccion_id', '=', $seccion);
        })
        ->join('turnos', function ($join) {
            global $turno;
            $join->on('cursos.turno_id', '=', 'turnos.turno_id')
            ->where('turnos.turno_id', '=',$turno);
        })
        ->select('cursos.*')
        ->get();
        return response()->json($curso,200); 
    }
    public function modificar(Curso $curso){
        $curso->save();
        return response()->json($curso,200);
    }
    public function miDocente($id){
        return response()->json(Curso::find($id)->user,200);
        
    }
    public function miSeccion($id){
        return response()->json(Curso::find($id)->seccion,200);
    }
    public function miTurno($id){
        return response()->json(Curso::find($id)->turno,200);
    }
}