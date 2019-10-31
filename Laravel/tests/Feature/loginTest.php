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
   /* public function testCreateExample(){
        $response = $this->withHeaders([
            'X-Header' => 'Value'
        ])->json('POST', '/api/auth/signup', 
        ['nombre' => 'nombre x',
        'apellido'=>'apellido x',
        'carnet' => 'carnet x',
        'email'=>'adminx1@example.com',
        'telefono' => 'telefono x',
        'password'=>'contra12345',
        'password_confirmation' => 'contra12345',
        'tipo'=>'Administrador'
        ]);
        $response
        ->assertStatus(200)
        ->assertJson([
            'nombre' => 'nombre x',
            'apellido'=>'apellido x',
            'carnet' => 'carnet x',
            'email'=>'adminx1@example.com',
            'telefono' => 'telefono x',
            'tipo'=>'Administrador'
        ]             
        );
        //$response->assertStatus(201);
    }*/
    /*
    public function testLoginTest(){
        $response = $this->withHeaders([
            'X-Header' => 'Value'
        ])->json('GET', '/api/auth/login'
        );
        $response
        ->assertStatus(200)           
        ->assertJson([
            'message' => 'Token exitoso'
        ]);
    }*/
    
    public function testUserTest(){
        $response = $this->withHeaders([
            'X-Header' => 'Value',
            'Authorization' => TestCase::$bearer
        ])->json('GET', '/api/auth/user'
        );
        $response->assertStatus(200);
    }

}
