<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use App\Http\Controllers\FamiliarController;
class CreateFamiliarRequest extends FormRequest
{
    protected $redirectAction = 'FamiliarController@crearMal';

    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'nombre'=>'required|max:45',
            'apellido'=>'required|max:45',
            'carnet'=>'required|max:45',
            'correo'=>'required|max:45',
            'telefono'=>'required|max:45',
            'contrasena'=>'required|max:45'
        ];
    }


    public function messages(){
        return[
            'nombre.required' => 'El :attribute es requerido',
            'apellido.required'=>'El :attribute es requerido',
            'carnet.required'=>'El :attribute es requerido',
            'correo.required'=>'El :attribute es requerido',
            'telefono.required'=>'El :attribute es requerido',
            'contrasena.required'=>'El :attribute es requerido'
        ];
    }
}
