<?php

namespace App\Http\DAO;
use App\Modelos\Camara;

class CamaraDAO{
 
    public function crear(Camara $camara){
        if(Camara::where([
            ['nombre', '=',$camara->nombre],
            ['address','=',$camara->address]
        ])->exists()){
            $camaraError = new Camara;
            $camaraError->id='0';
            return response()->json($camaraError,505);
        }else{
            $camara->save();
            return response()->json($camara,200);
        }
    }
    public function lista(){
        return response()->json(Camara::all(),200);
    }
    public function obtener($id){
        return response()->json(Camara::find($id),200);
    }
    public function modificar(Camara $camara){
        $camara->save();
        return response()->json($camara,200);
    }
}
