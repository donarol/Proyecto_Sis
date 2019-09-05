<?php

namespace App\Modelos;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Turno extends Model
{
    //
    protected $table = "turnos";
    protected $primaryKey = "turno_id"; 
    protected $fillable = ['nombre','monto','gestion','hora_inicio','hora_fin'];
    protected $hidden = ['created_at' ,'updated_at', 'deleted_at'];


}
