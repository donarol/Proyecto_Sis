<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class AlumnoCreateRequest extends FormRequest
{
    protected $redirectAction = 'AlumnoController@crearMal';
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
            'nombre'=>'required|string',
            'apellido'=>'required|string',
            'fecha_nacimiento'=>'required|string',
            'lugar_nacimiento'=>'required|string',
            'tipo_sanguineo'=>'required|string',
            'telefono'=>'required|string',
            'domicilio'=>'required|string' 
        ];
    }
}
