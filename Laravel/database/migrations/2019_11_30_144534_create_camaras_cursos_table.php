<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCamarasCursosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('camaras_cursos', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('camara_id')->unsigned();
            $table->foreign('camara_id')->references("camara_id")->on("camaras");

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
        Schema::dropIfExists('camaras_cursos');
    }
}
