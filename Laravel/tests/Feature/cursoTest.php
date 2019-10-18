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
        $response->assertStatus(200);
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
        $response->assertStatus(200);
    }
    public function testCursoDocenteExample(){
        $response = $this->withHeaders([
            'X-Header' => 'Value',
            'Authorization' => TestCase::$bearer
        ])->json('GET', '/api/auth/cursoDocente/1'
        );
        $response->assertStatus(200);
    }
    public function testCursoTurnoExample(){
        $response = $this->withHeaders([
            'X-Header' => 'Value',
            'Authorization' => TestCase::$bearer
        ])->json('GET', '/api/auth/cursoTurno/1'
        );
        $response->assertStatus(200);

    }
  /*  public function testCreateExample(){
        $response = $this->withHeaders([
            'X-Header' => 'Value',
            'Authorization' => TestCase::$bearer
        ])->json('POST', '/api/auth/registroCurso', 
        ['nombre' => 'curso 1 prueba 3',
        'gestion'=>'2019',
        'user_id' => '1',
        'seccion_id'=>'2',
        'turno_id' => '2'
        ]);
        $response->assertStatus(201);
    }*/
    public function testUpdateExample(){
        $response = $this->withHeaders([
            'X-Header' => 'Value',
            'Authorization' => TestCase::$bearer
        ])->json('PUT', '/api/auth/curso/1', 
        ['nombre' => 'curso 1 update',
        'gestion'=>'2020',
        'user_id' => '1',
        'seccion_id'=>'2',
        'turno_id' => '2'
        ]);
        $response->assertStatus(200);
    }
}
