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
        Schema::create('predaje', function (Blueprint $table) {
        $table->id();

        $table->foreignId('zadatak_id')
            ->constrained('zadaci')
            ->cascadeOnDelete();

        $table->foreignId('student_id')
            ->constrained('users')
            ->cascadeOnDelete();

        $table->enum('status', ['PREDATO', 'OCENJENO', 'VRAĆENO', 'ZAKAŠNJENO'])
            ->default('PREDATO');

        $table->decimal('ocena', 5, 2)->nullable();
        $table->text('komentar')->nullable();

        $table->string('file_path')->nullable();
        $table->dateTime('submitted_at')->nullable();

        $table->unique(['zadatak_id', 'student_id']);

        $table->timestamps();
    });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('predaje');
    }
};
