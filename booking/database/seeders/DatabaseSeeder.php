<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Client;
use App\Models\Reservation;
use App\Models\Apartment;
use Illuminate\Support\Facades\DB;
use App\Database\Factories\ReservationFactory;
use App\Database\Factories\ClientFactory;
use App\Database\Factories\ApartmentFactory;
class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
 
    public function run(): void
    {
        Client::truncate();
        Reservation::truncate();
        Apartment::truncate();
        
        Client::factory(10)->create();
        Reservation::factory(10)->create();
        Apartment::factory(10)->create();
         $this->call([
            ClientSeeder::class,
        ]);
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
    }
}
