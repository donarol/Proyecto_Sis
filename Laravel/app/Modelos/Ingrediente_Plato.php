<?php

namespace App\Modelos;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Ingrediente_Plato extends Model
{
    protected $table = "ingredientes_platos";
    protected $primaryKey = "ingrediente_plato_id"; 
  // protected $fillable = ['plato_id','ingrediente_id','cantidad'];
    protected $hidden = ['created_at' ,'updated_at','delele_at'];
}
