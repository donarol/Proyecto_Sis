<?php

namespace App\Http\Requests;


use Illuminate\Foundation\Http\FormRequest;

class AlumnoUserCreateRequest extends FormRequest
{
    protected $redirectAction = 'AlumnoUserController@crearMal';
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
            'alumno_id'=>'required',
            'user_id'=>'required',
            'parentesco'=>'required'
        ];
    }
}
