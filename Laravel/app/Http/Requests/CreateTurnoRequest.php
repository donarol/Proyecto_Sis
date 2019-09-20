<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CreateTurnoRequest extends FormRequest
{
    protected $redirectAction = 'TurnoController@crearMal';
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
            'nombre'=>'required',
            'monto'=>'required',
            'gestion'=>'required',
            'hora_inicio'=>'required',
            'hora_fin'=>'required'
        ];
    }
}
