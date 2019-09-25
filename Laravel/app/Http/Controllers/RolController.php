<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\BL\RolBL;
class RolController extends Controller
{
    public function obtener($id){
        $rol = new RolBL;
        return $rol->obtener($id);
    }
    public function lista(){
        $rol = new RolBL;
        return $rol->lista();
    }
    
}
