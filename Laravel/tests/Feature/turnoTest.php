<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class turnoTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function testTurnosExample()
    {
        $response = $this->withHeaders([
            'X-Header' => 'Value',
            'Authorization' => TestCase::$bearer
        ])->json('GET', '/api/auth/turnos'
        );
        $response->assertStatus(200);
    }
  /*  public function testCreateExample(){
        $response = $this->withHeaders([
            'X-Header' => 'Value',
            'Authorization' => TestCase::$bearer
        ])->json('POST', '/api/auth/registroTurno', 
        ['nombre' => 'turno 1',
        'monto'=>'200',
        'gestion' => '2019',
        'hora_inicio'=>'04:00:00',
        'hora_fin' => '07:00:00'
        ]);
        $response->assertStatus(201);
    }*/
    public function testTurnoExample()
    {
        $response = $this->withHeaders([
            'X-Header' => 'Value',
            'Authorization' => TestCase::$bearer
        ])->json('GET', '/api/auth/turno/1'
        );
        $response->assertStatus(200);
    }
    public function testUpdateExample(){
        $response = $this->withHeaders([
            'X-Header' => 'Value',
            'Authorization' => TestCase::$bearer
        ])->json('PUT', '/api/auth/turno/1', 
        ['nombre' => 'turno 1 nuevo',
        'monto'=>'250',
        'gestion' => '2020',
        'hora_inicio'=>'07:00:00',
        'hora_fin' => '10:00:00'
        ]);
        $response->assertStatus(200);
    }
}
