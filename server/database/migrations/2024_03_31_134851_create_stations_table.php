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
        Schema::create('stations', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('name');
            $table->time('open_hour');
            $table->time('close_hour');
            $table->decimal('latitude', 8, 6)->default(0.0);
            $table->decimal('longitude', 9, 6)->default(0.0);
            $table->enum('status',['Active', 'Inactive']);
            $table->string('image');
            $table->unsignedBigInteger('manager_id');
            $table->foreign('manager_id')->references('id')->on('managers')->onUpdate('cascade')->onDelete('cascade');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('stations');
    }
};
