<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTurnosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('turnos', function (Blueprint $table) {
            $table->bigIncrements('turno_id');
            $table->string('nombre',45);
            $table->integer('monto');       //monto a cobrar diferenciando turnos
            $table->string('gestion',45);
            $table->datetime('hora_inicio');
            $table->datetime('hora_fin');
            




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
        Schema::dropIfExists('turnos');
    }
}
