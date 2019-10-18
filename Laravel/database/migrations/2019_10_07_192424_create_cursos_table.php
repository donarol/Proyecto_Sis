<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCursosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cursos', function (Blueprint $table) {
            $table->bigIncrements('curso_id');
            $table->string('nombre');
            $table->string('gestion');

            $table->bigInteger('user_id')->unsigned();
            $table->foreign('user_id')->references("id")->on("users");

            $table->bigInteger('seccion_id')->unsigned();
            $table->foreign('seccion_id')->references("seccion_id")->on("secciones");

            $table->bigInteger('turno_id')->unsigned();
            $table->foreign('turno_id')->references("turno_id")->on("turnos");
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('cursos');
    }
}
