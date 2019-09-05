<?php

namespace App\Modelos;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Plato extends Model
{
    //
    protected $table = "platos";
    protected $primaryKey = "plato_id"; 
    protected $fillable = ['nombre','foto'];
    protected $hidden = ['created_at' ,'updated_at', 'deleted_at'];



}
