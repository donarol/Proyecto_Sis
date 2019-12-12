<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CamaraCursoCreateRequest extends FormRequest
{
    
    protected $redirectAction = 'CamaraController@crearMal';
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
            'camara_id'=>'required',
            'curso_id'=>'required'
        ];
    }
}
