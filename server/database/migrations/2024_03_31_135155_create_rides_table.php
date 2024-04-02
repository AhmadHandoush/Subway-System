<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('rides', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->unsignedBigInteger('departure_station_id');
            $table->foreign('departure_station_id')->references('id')->on('stations')->onUpdate('cascade')->onDelete('cascade');
            $table->unsignedBigInteger('arrival_station_id');
            $table->foreign('arrival_station_id')->references('id')->on('stations')->onUpdate('cascade')->onDelete('cascade');
            $table->dateTime('departure_time');
            $table->dateTime('arrival_time');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('rides');
    }
};
