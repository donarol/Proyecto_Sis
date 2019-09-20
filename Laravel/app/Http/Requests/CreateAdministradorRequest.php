<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CreateAdministradorRequest extends FormRequest
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
            'telefono'=>'required|max:45',
            'contrasena'=>'required|max:45',
            'cargo'=>'required',
            'correo'=>'required|max:45'
        ];
    }
}
