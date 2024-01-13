<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTranslationsTable extends Migration
{
    public function up()
    {
        Schema::create('translations', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('section')->nullable();
            $table->string('key');
            $table->string('default');
            $table->jsonb('value')->nullable();
            $table->timestamps();

            $table->unique(['section', 'key']);
        });
    }
}
