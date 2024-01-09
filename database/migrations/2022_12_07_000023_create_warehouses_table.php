<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateWarehousesTable extends Migration
{
    public function up()
    {
        Schema::create('warehouses', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->foreignIdFor(\App\Models\Country::class)->nullable()->constrained()->nullOnDelete();
            $table->foreignIdFor(\App\Models\Language::class)->nullable()->constrained()->nullOnDelete();
            $table->string('name')->unique();
            $table->string('email')->nullable();
            $table->longText('address')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }
}
