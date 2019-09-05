<?php

namespace App\Modelos;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Pago extends Model
{
    //
    protected $table = "pagos";
    protected $primaryKey = "pago_id"; 
    protected $fillable = ['monto','nit','factura','fecha'];
    protected $hidden = ['created_at' ,'updated_at', 'deleted_at'];


}
