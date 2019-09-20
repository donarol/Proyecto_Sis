<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Persona;
use App\Models\Rol;
use App\Models\Familiar;
use \Validator;
use Illuminate\Support\Facades\ Redirect;
use DB;

class PersonaController extends Controller
{
   public function registrar(Request $request)
   {
       $rules = [
            'nombre' => 'required',
            'apellido' => 'required'
       ];
       $customMessages = [
           'required' => 'El atributo :attribute es requerido.'
       ];
   } 
}
