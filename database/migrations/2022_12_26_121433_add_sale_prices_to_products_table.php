<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('products', function (Blueprint $table) {
            $table->jsonb('sale_prices')->nullable()->after('prices');
            $table->boolean('showcase')->default(0)->nullable()->after('trending');
            $table->boolean('on_sale')->default(0)->nullable()->after('main');
            $table->float('discount', 5, 2)->nullable()->after('data');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('products', function (Blueprint $table) {
            $table->dropColumn('sale_prices');
            $table->dropColumn('showcase');
            $table->dropColumn('on_sale');
            $table->dropColumn('discount');
        });
    }
};
