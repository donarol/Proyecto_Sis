<?php

namespace App\Modelos;

use Illuminate\Database\Eloquent\Model;

class Camara extends Model
{
    //
    protected $table = "camaras";
    protected $primaryKey = "camara_id"; 
    protected $fillable = ['nombre','address'];
    protected $hidden = ['created_at' ,'updated_at','pivot'];

}
