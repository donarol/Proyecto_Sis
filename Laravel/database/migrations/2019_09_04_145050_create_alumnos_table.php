<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAlumnosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('alumnos', function (Blueprint $table) {
            $table->bigIncrements('alumno_id');
            $table->string('sanguineo',45);
            $table->string('domicilio',45);
            $table->string('celular',45);
            $table->binary('foto');          //¡?como poner la foto
            $table->boolean('certificado_vacuna');
            $table->string('certificado_nacimiento',45);
            $table->date('fecha');
            $table->date('fecha_nacimiento');
            $table->binary('croquis');       //¡?como poner croquis
            
            
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
        Schema::dropIfExists('alumnos');
    }
}
