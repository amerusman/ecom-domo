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
        Schema::create('payments', function (Blueprint $table) {
            $table->id();
            $table->string('status');
            $table->foreignIdFor(\App\Models\Order::class);
            $table->foreignIdFor(\App\Models\User::class)->nullable();
            $table->foreignIdFor(\App\Models\Country::class);
            $table->string('notification_type')->nullable();
            $table->string('name');
            $table->string('token');
            $table->decimal('amount', 15, 2);
            $table->foreignIdFor(\App\Models\Currency::class);
            $table->ipAddress('ip');

            $table->jsonb('data')->nullable();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('payments');
    }
};
