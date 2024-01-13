<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateReviewsTable extends Migration
{
    public function up()
    {
        Schema::create('reviews', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->foreignId('product_id')->constrained()->onDelete('cascade');
            $table->foreignId('language_id')->constrained()->onDelete('cascade');
            $table->string('status')->nullable();
            $table->tinyInteger('rating')->unsigned();
            $table->string('name');
            $table->string('advantages')->nullable();
            $table->string('disadvantages')->nullable();
            $table->longText('body');
            $table->timestamps();
        });
    }
}
