<?php

namespace App\Modelos;

use Illuminate\Database\Eloquent\Model;

class TipoPlato extends Model
{
    protected $table = "tipos_platos";
    protected $primaryKey = "tipo_id"; 
    protected $fillable = ['nombre'];
    protected $hidden = ['created_at' ,'updated_at', 'deleted_at'];

}
