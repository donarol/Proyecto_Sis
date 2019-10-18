<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\BL\UserBL;
class UserController extends Controller
{
    public function obtener($id){
        $user = new userBL;
        return $user->obtener($id);
    }
    public function modificar($id,Request $request){
        $datos = $request->json()->all();
        $user = new UserBL;
        return $user->modificar($id,$datos);
    }
}
