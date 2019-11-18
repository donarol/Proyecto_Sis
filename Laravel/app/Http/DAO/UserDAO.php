<?php

namespace App\Http\DAO;
use App\User;

class UserDAO{
    public function obtener($id){
        return User::find($id);
    }
    public function modificar(User $user){
        $user->save();
        return response()->json($user, 200);
    }
}