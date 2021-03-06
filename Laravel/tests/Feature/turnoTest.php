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
    /*
    public function testCreateExample(){
        $response = $this->withHeaders([
            'X-Header' => 'Value',
            'Authorization' => TestCase::$bearer
        ])->json('POST', '/api/auth/registroTurno', 
        ['nombre' => 'turno nuevo 30',
        'monto'=>'500',
        'gestion' => '2020',
        'hora_inicio'=>'03:00:00',
        'hora_fin' => '10:00:00'
        ]);
        $response
        ->assertStatus(200)
        ->assertJson([
            'nombre' => 'turno nuevo 30',
            'monto'=>'500',
            'gestion' => '2020',
            'hora_inicio'=>'03:00:00',
            'hora_fin' => '10:00:00'
        ]             
        );
    }*/
    public function testTurnosExample()
    {
        $response = $this->withHeaders([
            'X-Header' => 'Value',
            'Authorization' => TestCase::$bearer
        ])->json('GET', '/api/auth/turnos'
        );
        $response->assertStatus(200);
       /* $response
        ->assertStatus(200)
        ->assertJson([
            'message' => 'cargado exitosamente'
        ]             
        );*/
    }
    public function testTurnoExample()
    {
        $response = $this->withHeaders([
            'X-Header' => 'Value',
            'Authorization' => TestCase::$bearer
        ])->json('GET', '/api/auth/turno/1'
        );
        $response
            ->assertStatus(200)
            ->assertJson([
                'nombre' => 'turno 1 nuevo',
                'monto'=>'250',
                'gestion' => '2020',
                'hora_inicio'=>'07:00:00',
                'hora_fin' => '10:00:00'
            ]);
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
        $response
        ->assertStatus(200)
        ->assertJson([
            'nombre' => 'turno 1 nuevo',
            'monto'=>'250',
            'gestion' => '2020',
            'hora_inicio'=>'07:00:00',
            'hora_fin' => '10:00:00'
        ]             
        );
    }
}
