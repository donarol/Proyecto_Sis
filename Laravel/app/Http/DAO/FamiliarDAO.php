<?php

namespace App\Http\DAO;
use App\User;

class FamiliarDAO{
    public function lista(){
       return User::where('tipo','Familiar')->get();
    }
}