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
            $table->string('nombre',45);
            $table->boolean('estado');
            $table->date('gestion');

            $table->bigInteger('administrador_id')->unsigned();
            $table->foreign('administrador_id')->references("administrador_id")->on("administradores");

            $table->bigInteger('seccion_id')->unsigned();
            $table->foreign('seccion_id')->references("seccion_id")->on("secciones");

            $table->bigInteger('turno_id')->unsigned();
            $table->foreign('turno_id')->references("turno_id")->on("turnos");
  
            
           
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
        Schema::dropIfExists('cursos');
    }
}
