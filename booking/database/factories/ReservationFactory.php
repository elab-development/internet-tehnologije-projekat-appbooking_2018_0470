<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Reservation>
 */
class ReservationFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'apartment_id' => $this->faker->numberBetween(1, 10), // Replace with a valid existing apartment_id
            'client_id' => $this->faker->numberBetween(1, 10),    // Replace with a valid existing client_id
            'check_in_date' => $this->faker->date(),
            'check_out_date' => $this->faker->date(),
            'created_at' => now(),
            'updated_at' => now(),
        ];
    }
}
