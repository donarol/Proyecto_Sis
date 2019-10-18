<?php
namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;
class loginTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
  /*  public function testCreateExample(){
        $response = $this->withHeaders([
            'X-Header' => 'Value'
        ])->json('POST', '/api/auth/signup', 
        ['nombre' => 'nombre a',
        'apellido'=>'apellido a',
        'carnet' => 'carnet a',
        'email'=>'admin41@example.com',
        'telefono' => 'telefono a',
        'password'=>'contra12345',
        'password_confirmation' => 'contra12345',
        'tipo'=>'Administrador'
        ]);
        $response->assertStatus(201);
    }*/
    public function testLoginTest(){
        $response = $this->withHeaders([
            'X-Header' => 'Value'
        ])->json('GET', '/api/auth/login'
        );
        $response
        ->assertStatus(200)           
        ->assertJson([
            'token_type' => 'Bearer'
        ]);
    }
    
    public function testUserTest(){
        $response = $this->withHeaders([
            'X-Header' => 'Value',
            'Authorization' => TestCase::$bearer
        ])->json('GET', '/api/auth/user'
        );
        $response->assertStatus(200);
    }

}
