<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class cursoTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function testCursoExample(){
        $response = $this->withHeaders([
            'X-Header' => 'Value',
            'Authorization' => TestCase::$bearer
        ])->json('GET', '/api/auth/curso/1'
        );
        $response
        ->assertStatus(200)
        ->assertJson([
            'nombre' => 'curso 1',
            'gestion'=>'2019',
            'user_id' => '1',
            'seccion_id'=>'1',
            'turno_id' => '2'
        ]);

    }
    public function testCursosExample(){
        $response = $this->withHeaders([
            'X-Header' => 'Value',
            'Authorization' => TestCase::$bearer
        ])->json('GET', '/api/auth/cursos'
        );
        $response->assertStatus(200);
    }
    public function testCursoSeccionExample(){
        $response = $this->withHeaders([
            'X-Header' => 'Value',
            'Authorization' => TestCase::$bearer
        ])->json('GET', '/api/auth/cursoSeccion/1'
        );
        $response
        ->assertStatus(200)
        ->assertJson([
            'seccion_id' => '1',
            'nombre'=>'Parbulario 2p',
            'descripcion' => 'niños 4 años'
        ]);
    }
    public function testCursoDocenteExample(){
        $response = $this->withHeaders([
            'X-Header' => 'Value',
            'Authorization' => TestCase::$bearer
        ])->json('GET', '/api/auth/cursoDocente/1'
        );
        $response
        ->assertStatus(200)
        ->assertJson([
            'id' => '1',
            'nombre'=>'nombre docente x',
            'apellido' => 'apellido a1',
            'carnet' => 'carnet a1',
            'email'=>'correo@example.com',
            'telefono' => 'telefono a1',
            'tipo'=>'Administrador',
            'email_verified_at' => null
        ]);
    }
    public function testCursoTurnoExample(){
        $response = $this->withHeaders([
            'X-Header' => 'Value',
            'Authorization' => TestCase::$bearer
        ])->json('GET', '/api/auth/cursoTurno/1'
        );
        $response
        ->assertStatus(200)
        ->assertJson([
            "turno_id"=> 2,
            "nombre"=> "turno 1",
            "monto"=> 200,
            "gestion" => "2019",
            'hora_fin' => '04:00:00',
            'hora_fin' => '07:00:00',
        ]);
    }
    /*
    public function testCreateExample(){
        $response = $this->withHeaders([
            'X-Header' => 'Value',
            'Authorization' => TestCase::$bearer
        ])->json('POST', '/api/auth/registroCurso', 
        ['nombre' => 'curso 1 prueba 4',
        'gestion'=>'2019',
        'user_id' => '1',
        'seccion_id'=>'2',
        'turno_id' => '2'
        ]);
        $response
        ->assertStatus(200)
        ->assertJson([
            'nombre' => 'curso 1 prueba 4',
            'gestion'=>'2019',
            'user_id' => '1',
            'seccion_id'=>'2',
            'turno_id' => '2'
        ]);
    }
    public function testUpdateExample(){
        $response = $this->withHeaders([
            'X-Header' => 'Value',
            'Authorization' => TestCase::$bearer
        ])->json('PUT', '/api/auth/curso/1', 
        [            
        'nombre' => 'curso 1 prueba 5',
        'gestion'=>'2019',
        'user_id' => '1',
        'seccion_id'=>'2',
        'turno_id' => '2'
        ]);       
        $response
        ->assertStatus(200)
        ->assertJson([
            'nombre' => 'curso 1 prueba 5',
            'gestion'=>'2019',
            'user_id' => '1',
            'seccion_id'=>'2',
            'turno_id' => '2'
        ]);
    }*/
}
