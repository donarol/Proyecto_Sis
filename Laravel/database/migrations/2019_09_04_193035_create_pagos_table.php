<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePagosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pagos', function (Blueprint $table) {
            $table->bigIncrements('pago_id');
            $table->int('monto');
            $table->string('nit',45);
            $table->string('factura',45);
            $table->date('fecha');

            $table->bigInteger('persona_id')->unsigned();
            $table->foreign('persona_id')->references("persona_id")->on("personas");

            $table->bigInteger('alumno_id')->unsigned();
            $table->foreign('alumno_id')->references("alumno_id")->on("alumnos");

            
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('pagos');
    }
}
