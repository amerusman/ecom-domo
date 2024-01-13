<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLettersTable extends Migration
{
    public function up()
    {
        Schema::create('letters', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name')->unique();
            $table->string('slug')->unique();
            $table->jsonb('subject')->nullable();
            $table->jsonb('body')->nullable();
            $table->timestamps();
        });
    }
}
