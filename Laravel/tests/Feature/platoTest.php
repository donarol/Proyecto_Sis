<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class platoTest extends TestCase
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
        ])->json('POST', '/api/auth/registroPlato', 
        ['nombre' => 'plato 10X',
        'preparacion' => 'preparacion con huevos duros',
        'fecha' => '2019-10-28'
        ]);
        $response
        ->assertStatus(200)
        ->assertJson([
            'nombre' => 'plato 10X',
            'preparacion' => 'preparacion con huevos duros',
            'fecha' => '2019-10-28'
        ]             
        );
    }*/
    /*
    public function testCreatePlatoIngredienteExample(){
        $response = $this->withHeaders([
            'X-Header' => 'Value',
            'Authorization' => TestCase::$bearer
        ])->json('POST', '/api/auth/registroIngredientePlato', 
        ['plato_id' => '1',
        'ingrediente_id' => '4',
        'cantidad' => '5 gramos'
        ]);
        $response
        ->assertStatus(200)
        ->assertJson([
            'plato_id' => '1',
            'ingrediente_id' => '4',
            'cantidad' => '5 gramos'
        ]             
        );
    }*/
    public function testPlatosExample()
    {
        $response = $this->withHeaders([
            'X-Header' => 'Value',
            'Authorization' => TestCase::$bearer
        ])->json('GET', '/api/auth/platos'
        );
        $response->assertStatus(200);
       /* $response
        ->assertStatus(200)
        ->assertJson([
            'message' => 'cargado exitosamente'
        ]             
        );*/
    }
    public function testPlatoExample()
    {
        $response = $this->withHeaders([
            'X-Header' => 'Value',
            'Authorization' => TestCase::$bearer
        ])->json('GET', '/api/auth/plato/1'
        );
         $response
        ->assertStatus(200)
        ->assertJson([
            'plato_id'=> '1',
            'nombre' => 'ingrediente 1',
            'preparacion' => 'preparacion',
            'fecha' => '2019-10-28'
        ]);
    }
    public function testUpdateExample(){
        $response = $this->withHeaders([
            'X-Header' => 'Value',
            'Authorization' => TestCase::$bearer
        ])->json('PUT', '/api/auth/plato/1', 
        [
            'nombre' => 'ingrediente 1',
            'preparacion' => 'preparacion',
            'fecha' => '2019-10-28'
        ]);
        $response
        ->assertStatus(200)
        ->assertJson([
            'nombre' => 'ingrediente 1',
            'preparacion' => 'preparacion',
            'fecha' => '2019-10-28'
        ]);
    }
    public function testPlatoFechaExample()
    {
        $response = $this->withHeaders([
            'X-Header' => 'Value',
            'Authorization' => TestCase::$bearer
        ])->json('GET', '/api/auth/platoFecha/2019-10-28'
        );
         $response->assertStatus(200);

    }
    public function testPlatoIngredientesExample()
    {
        $response = $this->withHeaders([
            'X-Header' => 'Value',
            'Authorization' => TestCase::$bearer
        ])->json('GET', '/api/auth/plato/1/ingredientes'
        );
         $response->assertStatus(200);

    }
}
