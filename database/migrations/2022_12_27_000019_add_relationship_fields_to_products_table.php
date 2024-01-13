<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddRelationshipFieldsToProductsTable extends Migration
{
    public function up()
    {
        Schema::table('products', function (Blueprint $table) {
            $table->unsignedBigInteger('brand_id')->nullable()->after('in_stock');
            $table->foreign('brand_id')->references('id')->on('brands');
            $table->unsignedBigInteger('warehouse_id')->nullable()->after('brand_id');
            $table->foreign('warehouse_id')->references('id')->on('warehouses');
        });
    }
}
