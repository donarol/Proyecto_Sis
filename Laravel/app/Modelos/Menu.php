<?php

namespace App\Modelos;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Menu extends Model
{
    //
    protected $table = "menus";
    protected $primaryKey = "menu_id"; 
    protected $fillable = ['fecha'];
    protected $hidden = ['created_at' ,'updated_at', 'deleted_at'];


}
