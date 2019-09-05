<?php

namespace App\Modelos;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Registro extends Model
{
    //
    protected $table = "registros";
    protected $primaryKey = "registro_id"; 
    protected $fillable = ['fecha'];
    protected $hidden = ['created_at' ,'updated_at', 'deleted_at'];



}
