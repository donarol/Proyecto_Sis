<?php

namespace App\Http\DAO;
use App\Modelos\Persona;

class PersonaDAO{
    public function crear(Persona $persona){
        $persona->save();
        return $persona['persona_id'];
    }
    public function modificar(Persona $persona){
        $persona->save();
        return $persona;
    }
}