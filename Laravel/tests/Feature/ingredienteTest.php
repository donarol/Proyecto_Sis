<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class ingredienteTest extends TestCase
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
        ])->json('POST', '/api/auth/registroIngrediente', 
        ['nombre' => 'ingrediente 101'
        ]);
        $response
        ->assertStatus(200)
        ->assertJson([
            'nombre' => 'ingrediente 101'
        ]             
        );
    }*/
    public function testIngredientesExample()
    {
        $response = $this->withHeaders([
            'X-Header' => 'Value',
            'Authorization' => TestCase::$bearer
        ])->json('GET', '/api/auth/ingredientes'
        );
        $response->assertStatus(200);
       /* $response
        ->assertStatus(200)
        ->assertJson([
            'message' => 'cargado exitosamente'
        ]             
        );*/
    }
    public function testIngredienteExample()
    {
        $response = $this->withHeaders([
            'X-Header' => 'Value',
            'Authorization' => TestCase::$bearer
        ])->json('GET', '/api/auth/ingrediente/1'
        );
         $response
        ->assertStatus(200)
        ->assertJson([
            'ingrediente_id'=> '1',
            'nombre' => 'ingrediente 1'
        ]             
        );
    }
    public function testUpdateExample(){
        $response = $this->withHeaders([
            'X-Header' => 'Value',
            'Authorization' => TestCase::$bearer
        ])->json('PUT', '/api/auth/ingrediente/1', 
        ['nombre' => 'ingrediente 1'
        ]);
        $response
        ->assertStatus(200)
        ->assertJson([
            'nombre' => 'ingrediente 1'
        ]             
        );
    }

}
