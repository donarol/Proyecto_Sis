<?php

namespace App\Modelos;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Familiar extends Model
{
    //
    protected $table = "familiares";
    protected $primaryKey = "familiar_id"; 
    protected $fillable = ['carnet','correo','telefono','contrasena','foto','fecha'];
    protected $hidden = ['created_at' ,'updated_at', 'deleted_at'];

}
