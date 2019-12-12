<?php

namespace App\Modelos;

use Illuminate\Database\Eloquent\Model;

class Chat_User extends Model
{
    //
    protected $table = "chats_users";
    protected $primaryKey = "id"; 
    protected $hidden = ['created_at' ,'updated_at', 'deleted_at'];
}
