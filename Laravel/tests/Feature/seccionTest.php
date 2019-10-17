<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class seccionTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function testSeccionesExample()
    {
        $response = $this->withHeaders([
            'X-Header' => 'Value',
            'Authorization' => TestCase::$bearer
        ])->json('GET', '/api/auth/secciones'
        );
        $response->assertStatus(200);
    }
    public function testSeccionExample()
    {
        $response = $this->withHeaders([
            'X-Header' => 'Value',
            'Authorization' => TestCase::$bearer
        ])->json('GET', '/api/auth/seccion/1'
        );
        $response->assertStatus(200);
    }
    public function testUpdateExample(){
        $response = $this->withHeaders([
            'X-Header' => 'Value',
            'Authorization' => TestCase::$bearer
        ])->json('PUT', '/api/auth/seccion/1', 
        ['nombre' => 'Parbulario',
        'descripcion'=>'niños 45 años'
        ]);
        $response->assertStatus(200);
    }
}
