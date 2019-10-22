<?php

namespace App\Modelos;

use Illuminate\Database\Eloquent\Model;

class IngredientePlato extends Model
{
    protected $table = "ingredientes_platos";
    protected $primaryKey = "id"; 
    protected $fillable = ['plato_id','ingrediente_id','cantidad'];
    protected $hidden = ['created_at' ,'updated_at','delele_at'];
}
