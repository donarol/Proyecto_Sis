<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateIngredientesPlatosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ingredientes_platos', function (Blueprint $table) {
            $table->bigIncrements('id');
            
            $table->bigInteger('plato_id')->unsigned();
            $table->foreign('plato_id')->references("plato_id")->on("platos");
            
            $table->bigInteger('ingrediente_id')->unsigned();
            $table->foreign('ingrediente_id')->references("ingrediente_id")->on("ingredientes");
            $table->string('cantidad');
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
        Schema::dropIfExists('ingredientes_platos');
    }
}
