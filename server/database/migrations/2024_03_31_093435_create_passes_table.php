<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    
    public function up(): void
    {
        Schema::create('passes', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->unsignedBigInteger('passenger_id');
            $table->foreign('passenger_id')->references('id')->on('passengers')->onUpdate('cascade')->onDelete('cascade');
            $table->integer('rides_left');
            $table->integer('price');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('passes');
    }
};
