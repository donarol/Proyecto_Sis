<?php

namespace App\Modelos;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Chat extends Model
{
    //
    protected $table = "chats";
    protected $primaryKey = "chat_id"; 
    protected $fillable = ['nombre'];
    protected $hidden = ['created_at' ,'updated_at', 'deleted_at'];



}
