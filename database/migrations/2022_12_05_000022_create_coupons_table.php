<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCouponsTable extends Migration
{
    public function up()
    {
        Schema::create('coupons', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name');
            $table->string('code')->unique();
            $table->boolean('active')->default(0)->nullable();
            $table->datetime('start_at')->nullable();
            $table->datetime('expiry_at')->nullable();
            $table->integer('discount')->unsigned();
            $table->integer('limit')->nullable()->unsigned();
            $table->integer('limit_user')->nullable()->unsigned();
            $table->timestamps();
        });
    }
}
