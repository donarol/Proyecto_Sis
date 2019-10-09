<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\BL\SeccionBL;
class seccionController extends Controller
{
    public function lista(){
        $seccion = new SeccionBL;
        return $seccion->lista();
    }
    public function obtener($id){
        $seccion = new SeccionBL;
        return $seccion->obtener($id);
    }
    public function modificar($id,Request $request){
        $datos = $request->json()->all();
        $seccion = new SeccionBL;
        return $seccion->modificar($id,$datos);
    }
}
