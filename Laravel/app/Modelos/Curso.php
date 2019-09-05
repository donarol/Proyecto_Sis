<?php

namespace App\Modelos;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Curso extends Model
{
    //
    protected $table = "cursos";
    protected $primaryKey = "curso_id"; 
    protected $fillable = ['nombre','estado','gestion'];
    protected $hidden = ['created_at' ,'updated_at', 'deleted_at'];



}
