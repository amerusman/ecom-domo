<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductsTable extends Migration
{
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('slug')->unique();
            $table->string('sku')->unique();
            $table->boolean('active')->default(0)->nullable();
            $table->boolean('in_stock')->default(0)->nullable();
            $table->boolean('trending')->default(0)->nullable();
            $table->boolean('main')->default(0)->nullable();
            $table->tinyInteger('rating')->unsigned()->default(0)->nullable();
            $table->jsonb('name');
//            $table->decimal('price', 15, 2)->nullable();
            $table->jsonb('prices')->nullable();
            $table->jsonb('description')->nullable();
            $table->jsonb('data')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }
}
