<?php

namespace App\Modelos;

use Illuminate\Database\Eloquent\Model;

class Ingrediente extends Model
{
    protected $table = "ingredientes";
    protected $primaryKey = "ingrediente_id"; 
    protected $fillable = ['nombre'];
    protected $hidden = ['created_at' ,'updated_at','pivot'];
}
