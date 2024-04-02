<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->decimal('latitude', 8, 6);
            $table->decimal('longitude', 9, 6);
        });
    }

    public function down(): void
    {
        $table->dropColumn('latitude');
        $table->dropColumn('longitude');
    }
};