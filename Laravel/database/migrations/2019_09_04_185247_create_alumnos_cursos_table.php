<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAlumnosCursosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('alumnos_cursos', function (Blueprint $table) {
            $table->bigIncrements('alumno_curso_id');
            $table->string('estado');      //para ver si esta inscrito o no
            $table->date('fecha');

            $table->bigInteger('alumno_id')->unsigned();
            $table->foreign('alumno_id')->references("alumno_id")->on("alumnos");

            $table->bigInteger('curso_id')->unsigned();
            $table->foreign('curso_id')->references("curso_id")->on("cursos");


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
        Schema::dropIfExists('alumnos_cursos');
    }
}
