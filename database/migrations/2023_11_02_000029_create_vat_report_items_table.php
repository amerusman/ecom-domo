<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateVatReportItemsTable extends Migration
{
    public function up()
    {
        Schema::create('vat_report_items', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->foreignIdFor(\App\Models\Order::class);
            $table->foreignIdFor(\App\Models\VatReport::class)->nullable();
            $table->string('version')->nullable();
            $table->string('date')->nullable();
            $table->string('account')->nullable();
            $table->string('account_2')->nullable();
            $table->decimal('key_amount', 15, 2)->nullable();
            $table->string('d_a')->nullable();
            $table->string('iso')->nullable();
            $table->integer('quantity')->nullable();
            $table->float('tax_rate', 4, 2)->nullable();
            $table->integer('tax_method')->nullable();
            $table->integer('tax_coefficient')->nullable();
            $table->string('tax_account')->nullable();
            $table->string('tax_account_2')->nullable();
            $table->integer('tax_debit_credit')->nullable();
            $table->string('text')->nullable();
            $table->string('invoice_number')->nullable();
            $table->integer('vat_code')->nullable();
            $table->timestamps();
        });
    }
}
