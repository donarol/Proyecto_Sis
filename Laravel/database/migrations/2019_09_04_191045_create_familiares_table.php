<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateFamiliaresTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('familiares', function (Blueprint $table) {
            $table->bigIncrements('familiar_id');
            $table->string('carnet',45);
            $table->string('correo',45);
            $table->string('telefono',45);
            $table->string('contrasena',45);
            $table->binary('foto');         //como poner foto
            

            
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
        Schema::dropIfExists('familiares');
    }
}
