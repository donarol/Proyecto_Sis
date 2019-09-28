<?php
namespace App\Http\Controllers;
use App\Http\BL\AuthBL;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\AuthCreateRequest;
use App\Http\Requests\AuthLoginRequest;
class AuthController extends Controller
{
    public function crear(AuthCreateRequest $request){
        $datos = $request->json()->all();
        $user = new AuthBL;
        return $user->crear($datos);
    }
    public function crearMal(){
        echo 'errro al crear cuenta administrador';
    }
    public function login(AuthLoginRequest $request){
        $user = new AuthBL;
        return $user->login($request);
    }
    public function loginMal(){
        echo 'error al login';
    }
    public function user(Request $request){
        return response()->json($request->user());
    }
    public function logout(Request $request){
        $request->user()->token()->revoke();
        return response()->json(['message' => 
            'Successfully logged out']);
    }
}