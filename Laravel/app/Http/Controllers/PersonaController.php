<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Modelos\Persona;
class PersonaController extends Controller
{
    public function index()
    {
        //apunta a inicio
        $persona=Persona::take(10)->get();
        return $persona;
    }

    public function create()
    {
        //apunta a crear    
    }
    public function crear(Request $request)
    {
        //apunta a insert
      /*$persona=new Persona;
        $persona->nombre=$request->get('nombre');
        $persona->apellido=$request->get('apellido');
        $persona->save();
        return $persona['persona_id'];*/
    }
    public function show($id)
    {
        //
    }
    public function edit($id)
    {
        //
    }
    public function update(Request $request, $id)
    {
        //apunta a update
    }
    public function destroy($id)
    {
        //apunta a delete
    }
}
