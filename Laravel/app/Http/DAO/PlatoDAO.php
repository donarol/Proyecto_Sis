<?php

namespace App\Http\DAO;
use App\Modelos\Plato;
use Carbon\Carbon;

class PlatoDAO{
    public function crear(Plato $plato){
        if(Plato::where([
            ['nombre', '=',$plato->nombre]
        ])->exists()){
            $platoError = new Plato;
            $platoError->id='0';
            return response()->json($platoError,505);
        }else{
            $plato->save();
            return response()->json($plato,200);
        }
    }
    public function lista(){
        return Plato::all();
    }
    public function obtener($id){
        return Plato::find($id);
    }
    public function modificar(Plato $plato){
        $plato->save();
        return $plato;
    }
    public function obtenerFecha($fecha){
        //return Plato::whereDay('created_at', '=', 22)->get();
        return Plato::whereDate('fecha', '=', Carbon::parse($fecha)->format('Y-m-d'))->get();
    }
    public function ingredientes($id){
        return Plato::find($id)->ingredientes;
    }
}