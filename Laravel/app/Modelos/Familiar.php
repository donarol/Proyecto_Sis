<?php

namespace App\Modelos;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Familiar extends Model
{
    //
    protected $table = "familiares";
    protected $primaryKey = "familiar_id"; 
    protected $fillable = ['carnet','correo','telefono','foto','fecha'];
    protected $hidden = ['created_at' ,'updated_at', 'contrasena','persona_id'];

    public function persona(){
        return $this->hasOne('App\Modelos\Persona','persona_id','persona_id');
    }
}
