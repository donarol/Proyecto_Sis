<?php

namespace App\Modelos;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Administrador extends Model
{
    //
    protected $table = "administradores";
    protected $primaryKey = "administrador_id"; 
    protected $fillable = ['carnet','telefono','cargo','correo','foto'];
    protected $hidden = ['contrasena','created_at' ,'updated_at', 'deleted_at'];
    
    public function persona(){
        return $this->hasOne('App\Modelos\Persona','persona_id','persona_id');
    }
}
