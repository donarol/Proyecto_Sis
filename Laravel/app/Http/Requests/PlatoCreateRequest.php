<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class PlatoCreateRequest extends FormRequest
{
    protected $redirectAction = 'PlatoController@crearMal';
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
            'preparacion'=>'required',
            'fecha'=>'required'
        ];
    }
}
