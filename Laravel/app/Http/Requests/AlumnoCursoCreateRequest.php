<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class AlumnoCursoCreateRequest extends FormRequest
{
    protected $redirectAction = 'AlumnoCursoController@crearMal';
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
            'alumno_id'=>'require',
            'curso_id'=>'require',
            'estado'=>'require'
        ];
    }
}
