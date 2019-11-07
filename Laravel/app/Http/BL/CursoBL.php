<?php

namespace App\Http\BL;

use App\Http\DAO\CursoDAO;
use App\Modelos\Curso;
class CursoBL{
    public function crear($datos){    
        $curso = new Curso;
        $curso->nombre=$datos['nombre'];
        $curso->gestion=$datos['gestion'];
        $curso->user_id=$datos['user_id'];
        $curso->seccion_id=$datos['seccion_id'];
        $curso->turno_id=$datos['turno_id'];

        $cursoDao = new CursoDAO;
        return $cursoDao->crear($curso);    
    }
    public function lista(){
        $cursoDao = new CursoDAO;
        return $cursoDao->lista();
    }
    public function obtener($id){
        $cursoDao = new CursoDAO;
        return $cursoDao->obtener($id);    
    }
    public function obtenerLista($datos){
        $curso = new Curso;
        $curso->seccion_id=$datos['seccion_id'];

        $curso->turno_id=$datos['turno_id'];
        $cursoDao = new CursoDAO;
        return $cursoDao->obtenerLista($curso);
    }
    public function alumnos($id){
        $cursoDao = new CursoDAO;
        return $cursoDao->alumnos($id);
    }
    public function miDocente($id){
        $cursoDao = new CursoDAO;
        return $cursoDao->miDocente($id);
    }
    public function miSeccion($id){
        $cursoDao = new CursoDAO;
        return $cursoDao->miSeccion($id);
    }
    public function miTurno($id){
        $cursoDao = new CursoDAO;
        return $cursoDao->miTurno($id);
    }

    public function modificar($id,$datos){    
        $curso=Curso::find($id);
        $curso->nombre=$datos['nombre'];
        $curso->gestion=$datos['gestion'];
        $curso->user_id=$datos['user_id'];
        $curso->seccion_id=$datos['seccion_id'];
        $curso->turno_id=$datos['turno_id'];

        $cursoDao = new CursoDAO;
        return $cursoDao->modificar($curso);    
    }
}