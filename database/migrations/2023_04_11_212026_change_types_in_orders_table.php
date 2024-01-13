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
        Schema::table('orders', function (Blueprint $table)
        {
            $table->foreignIdFor(\App\Models\Country::class)->nullable()->constrained();

            $table->decimal('sub_total', 15, 2)->nullable();
            $table->jsonb('discount_breakdown')->nullable();
            $table->decimal('discount_total', 15, 2)->nullable();
            $table->decimal('shipping_total', 15, 2)->nullable();
            $table->jsonb('tax_breakdown')->nullable();
            $table->decimal('tax_total', 15, 2)->nullable();

            $table->jsonb('billing')->nullable();
            $table->jsonb('shipping')->nullable();
            $table->jsonb('payment')->nullable();
            $table->jsonb('items')->nullable();

            $table->jsonb('meta')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('orders', function (Blueprint $table) {
            $table->dropColumn('country_id');

            $table->dropColumn('sub_total');
            $table->dropColumn('discount_breakdown');
            $table->dropColumn('discount_total');
            $table->dropColumn('shipping_total');
            $table->dropColumn('tax_breakdown');
            $table->dropColumn('tax_total');
            $table->dropColumn('meta');

            $table->dropColumn('billing');
            $table->dropColumn('shipping');
            $table->dropColumn('payment');
            $table->dropColumn('items');
        });
    }
};
