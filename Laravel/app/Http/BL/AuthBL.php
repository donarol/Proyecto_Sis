<?php

namespace App\Http\BL;

use App\User;
use App\Http\DAO\AuthDAO;
use Illuminate\Support\Facades\Auth;
class AuthBL{
    public function crear($datos){
        $user = new User([
            'nombre'=>$datos['nombre'],
            'apellido'=>$datos['apellido'],
            'carnet'=>$datos['carnet'],
            'email'=>$datos['email'],
            'telefono'=>$datos['telefono'],
            'password'=>bcrypt($datos['password']),
            'tipo'=>$datos['tipo'],
        ]);
        $userDao = new AuthDAO;
        return $userDao->crear($user);
    }
    public function login($request){
        $credentials = request(['email', 'password']);
        if (!Auth::attempt($credentials)) {
            return response()->json([
                'message' => $credentials], 401);
        }
        $user = $request->user();
        $userDao = new AuthDAO;
        return $userDao->login($user);
    }
}