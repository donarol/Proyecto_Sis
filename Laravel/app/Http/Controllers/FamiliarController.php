<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\BL\FamiliarBL;

class FamiliarController extends Controller
{
    public function lista(){
        $familiar = new FamiliarBL;
        return $familiar->lista();
    }
}
