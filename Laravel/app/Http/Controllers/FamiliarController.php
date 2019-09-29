<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\BL\FamiliarBL;

class FamiliarController extends Controller
{
    public function obtener($id){
        $familiar = new FamiliarBL;
        return $familiar->obtener($id);
    }
    public function modificar($id,Request $request){
        $datos = $request->json()->all();
        $familiar = new FamiliarBL;
        return $familiar->modificar($id,$datos);
    }
    public function lista(){
        $familiar = new FamiliarBL;
        return $familiar->lista();
    }
}
