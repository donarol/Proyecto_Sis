<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class IngredientePlatoCreateRequest extends FormRequest
{
    protected $redirectAction = 'IngredientePlatoController@crearMal';
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
            'plato_id'=>'required',
            'ingrediente_id'=>'required',
            'cantidad'=>'required'
        ];
    }
}
