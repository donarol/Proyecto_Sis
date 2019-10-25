<?php

namespace App\Modelos;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Plato extends Model
{
    //
    protected $table = "platos";
    protected $primaryKey = "plato_id"; 
    protected $fillable = ['nombre','preparacion','fecha'];
    protected $hidden = ['created_at' ,'updated_at', 'deleted_at'];

    public function ingredientes(){
        return $this->belongsToMany('App\Modelos\Ingrediente','ingredientes_platos','plato_id','ingrediente_id');
    }

}
