<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMensajesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('mensajes', function (Blueprint $table) {
            $table->bigIncrements('mensaje_id');
            $table->string('mensaje',45);
            $table->date('fecha');


            $table->bigInteger('persona_id')->unsigned();
            $table->foreign('persona_id')->references("persona_id")->on("personas");

            $table->bigInteger('chat_id')->unsigned();
            $table->foreign('chat_id')->references("chat_id")->on("chats");


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
        Schema::dropIfExists('mensajes');
    }
}
