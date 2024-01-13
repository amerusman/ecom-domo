<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddRelationshipFieldsToCountriesTable extends Migration
{
    public function up()
    {
        Schema::table('countries', function (Blueprint $table) {
            $table->unsignedBigInteger('currency_id')->nullable()->after('short_code');
            $table->foreign('currency_id', 'currency_fk_7498595')->references('id')->on('currencies');
        });
    }
}
