<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class camaraTest extends TestCase
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
        ])->json('POST', '/api/auth/registroCamara', 
        ['nombre' => 'camara 100',
        'address'=>'http://192.168.50.101:8080/browserfs.html',
        ]);
        $response
        ->assertStatus(200)
        ->assertJson([
            'nombre' => 'camara 100',
            'address'=>'http://192.168.50.101:8080/browserfs.html'
        ]             
        );
    }*/
    public function testCamarasExample()
    {
        $response = $this->withHeaders([
            'X-Header' => 'Value',
            'Authorization' => TestCase::$bearer
        ])->json('GET', '/api/auth/camaras'
        );
        $response->assertStatus(200);
       /* $response
        ->assertStatus(200)
        ->assertJson([
            'message' => 'cargado exitosamente'
        ]             
        );*/
    }
    public function testCamaraExample()
    {
        $response = $this->withHeaders([
            'X-Header' => 'Value',
            'Authorization' => TestCase::$bearer
        ])->json('GET', '/api/auth/camara/1'
        );
        $response
            ->assertStatus(200)
            ->assertJson([
                'nombre' => 'camara 1',
                'address'=>'http://192.168.43.159:8080/browserfs.html',
            ]);
    }
    public function testUpdateExample(){
        $response = $this->withHeaders([
            'X-Header' => 'Value',
            'Authorization' => TestCase::$bearer
        ])->json('PUT', '/api/auth/camara/1', 
        ['nombre' => 'camara 1',
        'address'=>'http://192.168.43.159:8080/browserfs.html'
        ]);
        $response
        ->assertStatus(200)
        ->assertJson([
            'nombre' => 'camara 1',
            'address'=>'http://192.168.43.159:8080/browserfs.html',
        ]             
        );
    }
}
