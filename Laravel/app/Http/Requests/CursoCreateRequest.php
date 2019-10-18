<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CursoCreateRequest extends FormRequest
{
    protected $redirectAction = 'CursoController@crearMal';
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
            'gestion'=>'required',
            'user_id'=>'required',
            'seccion_id'=>'required',
            'turno_id'=>'required'
        ];
    }
}
