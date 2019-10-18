<?php

namespace App\Modelos;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Curso extends Model
{
    //
    protected $table = "cursos";
    protected $primaryKey = "curso_id"; 
    protected $fillable = ['nombre','gestion'];
    protected $hidden = ['created_at' ,'updated_at', 'deleted_at'];

    //REVISAR
    public function user(){
        return $this->belongsTo('App\User');
    }
    public function seccion(){
        return $this->belongsTo('App\Modelos\Seccion','seccion_id','seccion_id');
    }
    public function turno(){
        return $this->belongsTo('App\Modelos\Turno','turno_id','turno_id');
    }

}
