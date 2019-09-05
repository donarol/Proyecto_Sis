<?php

namespace App\Modelos;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class TipoChat extends Model
{
    //
    protected $table = "tipos_chats";
    protected $primaryKey = "tipo_chat_id"; 
    protected $fillable = ['nombre'];
    protected $hidden = ['created_at' ,'updated_at', 'deleted_at'];


}
