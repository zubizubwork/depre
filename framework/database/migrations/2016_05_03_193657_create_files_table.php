<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateFilesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('files', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('flats_id');
            $table->unsignedInteger('number');
            $table->string('name');
            $table->string('type');
            $table->string('hash');
            $table->timestamps();
            
            $table->foreign('flats_id')
                    ->references('id')
                    ->on('flats')
                    ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('files');
        Schema::drop('files_flats');
    }
}
