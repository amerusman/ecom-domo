<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCountriesTable extends Migration
{
    public function up()
    {
        Schema::create('countries', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->jsonb('name')->nullable();
            $table->string('short_code')->nullable();
            $table->boolean('active')->default(0)->nullable();
            $table->float('vat', 5, 3)->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }
}
