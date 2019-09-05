<?php

namespace App\Modelos;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Mensaje extends Model
{
    //
    protected $table = "mensajes";
    protected $primaryKey = "mensaje_id"; 
    protected $fillable = ['mensaje','fecha'];
    protected $hidden = ['created_at' ,'updated_at', 'deleted_at'];

}
