<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateRegistrosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('registros', function (Blueprint $table) {
            $table->bigIncrements('registro_id');
            $table->date('fecha');

            $table->bigInteger('alumno_id')->unsigned();
            $table->foreign('alumno_id')->references("alumno_id")->on("alumnos");

            $table->bigInteger('familiar_id')->unsigned();
            $table->foreign('familiar_id')->references("familiar_id")->on("familiares");

            $table->bigInteger('administrador_id')->unsigned();
            $table->foreign('administrador_id')->references("administrador_id")->on("administradores");



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
        Schema::dropIfExists('registros');
    }
}
