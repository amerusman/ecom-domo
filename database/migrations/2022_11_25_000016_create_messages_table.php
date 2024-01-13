<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMessagesTable extends Migration
{
    public function up()
    {
        Schema::create('messages', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('parent_id')->nullable();
            $table->string('firstname');
            $table->string('lastname');
            $table->string('email');
            $table->string('phone')->nullable();
            $table->longText('message');
            $table->boolean('viewed')->default(0)->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }
}
