<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMenusPlatosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('menus_platos', function (Blueprint $table) {
            //TABLA NO USADA
            $table->bigIncrements('id');
            
            $table->bigInteger('plato_id')->unsigned();
            $table->foreign('plato_id')->references("plato_id")->on("platos");
            
            $table->bigInteger('menu_id')->unsigned();
            $table->foreign('menu_id')->references("menu_id")->on("menus");
            
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
        Schema::dropIfExists('menus_platos');
    }
}
