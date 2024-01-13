<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBannersTable extends Migration
{
    public function up()
    {
        Schema::create('banners', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name');
            $table->jsonb('left_line_1')->nullable();
            $table->jsonb('left_line_2')->nullable();
            $table->jsonb('right_line_1')->nullable();
            $table->jsonb('right_line_2')->nullable();
            $table->boolean('active')->default(0)->nullable();
            $table->integer('position')->default(0)->nullable();
            $table->timestamps();
        });
    }
}
