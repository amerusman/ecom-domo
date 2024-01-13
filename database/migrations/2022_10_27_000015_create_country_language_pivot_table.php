<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCountryLanguagePivotTable extends Migration
{
    public function up()
    {
        Schema::create('country_language', function (Blueprint $table) {
            $table->unsignedBigInteger('country_id');
            $table->foreign('country_id', 'country_id_fk_7231507')->references('id')->on('countries')->onDelete('cascade');
            $table->unsignedBigInteger('language_id');
            $table->foreign('language_id', 'language_id_fk_7231507')->references('id')->on('languages')->onDelete('cascade');
        });
    }
}
