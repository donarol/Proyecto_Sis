<?php

namespace App\Http\BL;

use App\Http\DAO\FamiliarDAO;

class FamiliarBL{
    public function lista(){
        $familiar = new FamiliarDAO;
        return $familiar->lista();
    }
}