<?php

namespace App\Http\DAO;
use App\User;

class FamiliarDAO{
    public function obtener($id){
        return User::where('tipo','Familiar')->find($id);
    }
    public function modificar($id,User $user){
        $user->save();
        return response()->json([
            'message' => 'Successfully update user!'], 201);
    }
    public function lista(){
       return User::where('tipo','Familiar')->get();
    }
}