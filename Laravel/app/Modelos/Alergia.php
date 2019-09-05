<?php

namespace App\Modelos;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Alergia extends Model
{
    //
    protected $table = "alergias";
    protected $primaryKey = "alergia_id"; 
    protected $fillable = ['nombre','descripcion'];
    protected $hidden = ['created_at' ,'updated_at', 'deleted_at'];


}
