<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class AuthCreateRequest extends FormRequest
{
    protected $redirectAction = 'AuthController@crearMal';
    
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
            'carnet'=>'required|string',
            'email'=>'required|string|email|unique:users',
            'telefono'=>'required|string',
            'password'=>'required|string',
            'tipo'=>'required|string' 
        ];
    }
}
