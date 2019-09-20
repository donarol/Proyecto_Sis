<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAlumnosAlergiasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('alumnos_alergias', function (Blueprint $table) {
            $table->bigIncrements('alumno_alergia_id');
            $table->bigInteger('alumno_id')->unsigned();
            $table->foreign('alumno_id')->references("alumno_id")->on("alumnos");
            $table->bigInteger('alergia_id')->unsigned();
            $table->foreign('alergia_id')->references("alergia_id")->on("alergias");
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
        Schema::dropIfExists('alumnos_alergias');
    }
}
