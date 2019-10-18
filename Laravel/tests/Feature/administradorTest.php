<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class administradorTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function testAdministradoresExample(){
        $response = $this->withHeaders([
            'X-Header' => 'Value',
            'Authorization' => TestCase::$bearer
        ])->json('GET', '/api/auth/administradores'
        );
        $response->assertStatus(200);
    }
    
    public function testCursosDocenteExample(){
        $response = $this->withHeaders([
            'X-Header' => 'Value',
            'Authorization' => TestCase::$bearer
        ])->json('GET', '/api/auth/administradoresCursos/1'
        );
        $response->assertStatus(200);
    }

}
