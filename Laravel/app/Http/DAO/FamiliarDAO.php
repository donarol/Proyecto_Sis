<?php

namespace App\Http\DAO;
use App\Modelos\Familiar;
use App\Http\DAO\PersonaDAO;
use App\Http\JsonNew\Familiar_Persona;

class FamiliarDAO{
    public function crear(Familiar $familiar){
        $familiar->save();
        return $familiar;
    }
    public function login(Familiar $familiar){
        $familiar=Familiar::where(array(
            'correo'=>$familiar->correo,
            'contrasena'=>$familiar->contrasena
            )
        )->first();
        
        return $familiar;
    }
    public function obtener($id){
       /* $familiar=Familiar::find($id)->persona;
        $res=$familiar.concat(Familiar::find($id));*/
        $familiar=Familiar::find($id);
        $persona=Familiar::find($id)->persona;
       // $res=array($familiar->nom,$persona);
        $famPer = new Familiar_Persona;
        return $famPer->familiarPersona($familiar,$persona);
    }
    public function modificar($id,$datos){
        
        $familiar = Familiar::find($id);
        $familiar->carnet=$datos['carnet'];
        $familiar->correo=$datos['correo'];
        $familiar->telefono=$datos['telefono'];
        
        $persona = Familiar::find($id)->persona;
        $persona->nombre=$datos['nombre'];
        $persona->apellido=$datos['apellido'];
      //  return $persona;
        /*
        $perDao=new PersonaDAO;
        $perDao->modificar($persona);*/
        $familiar->save();
        $persona->save();
        $famPer = new Familiar_Persona;
        return $famPer->familiarPersona($familiar,$persona);
    }
}