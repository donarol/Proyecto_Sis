<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAdministradoresTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('administradores', function (Blueprint $table) {
            $table->bigIncrements('administrador_id');
            $table->string('carnet',45);
            $table->string('telefono');
            $table->string('contrasena',45);
            $table->string('cargo',45);
            $table->string('correo',45);
            $table->binary('foto');         //como se pone fotoooo

            $table->bigInteger('rol_id')->unsigned();
            $table->foreign('rol_id')->references("rol_id")->on("roles");

            $table->bigInteger('persona_id')->unsigned();
            $table->foreign('persona_id')->references("persona_id")->on("personas");





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
        Schema::dropIfExists('administradores');
    }
}
