<?php

namespace App\Modelos;

use Illuminate\Database\Eloquent\Model;

class Ingrediente extends Model
{
    protected $table = "ingredientes";
    protected $primaryKey = "ingrediente_id"; 
    protected $fillable = ['ingrediente_id','nombre'];
    protected $hidden = ['created_at' ,'updated_at','pivot'];
}
