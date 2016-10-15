<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateFlatsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('flats', function (Blueprint $table) {
            $table->increments('id');
            $table->string('lot');
            $table->string('type');
            $table->enum('floor', [1, 2, 3]);
            $table->string('price_for_meter');
            $table->string('price');
            $table->enum('status', ['свободно', 'зарезервированно', 'продано']);
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
        Schema::drop('flats');
    }
}
