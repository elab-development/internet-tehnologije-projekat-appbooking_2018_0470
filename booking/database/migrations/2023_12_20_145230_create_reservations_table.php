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
        Schema::create('reservations', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('apartment_id');
           // $table->foreign('apartment_id')->references('id')->on('apartments')->onDelete('cascade');
            $table->unsignedBigInteger('client_id');
           // $table->foreign('client_id')->references('id')->on('clients')->onDelete('cascade');
           // $table->foreignId('apartmentID');
            $table->date('check_in_date');
            $table->date('check_out_date');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('reservations');
    }
};
