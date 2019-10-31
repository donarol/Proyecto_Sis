<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class alumnoTest extends TestCase
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
        ])->json('POST', '/api/auth/registroAlumno', 
        ['nombre' => 'alumno pp',
        'apellido'=>'apellido pp',
        'fecha_nacimiento' => '2019-10-02',
        'lugar_nacimiento'=>'obrajes',
        'tipo_sanguineo' => 'O+',
        'telefono'=>'234562',
        'domicilio' => 'Calle 2 222',
        'certificado_vacuna'=>'1',
        'rude'=>'0',
        'certificado_nacimiento'=>'1'
        ]);
        $response
        ->assertStatus(200)
        ->assertJson([
            'nombre' => 'alumno pp',
            'apellido'=>'apellido pp',
            'fecha_nacimiento' => '2019-10-02',
            'lugar_nacimiento'=>'obrajes',
            'tipo_sanguineo' => 'O+',
            'telefono'=>'234562',
            'domicilio' => 'Calle 2 222',
            'certificado_vacuna'=>'1',
            'rude'=>'0',
            'certificado_nacimiento'=>'1'
        ]);
    }
    public function testCreateAlumnoCursoExample(){
        $response = $this->withHeaders([
            'X-Header' => 'Value',
            'Authorization' => TestCase::$bearer
        ])->json('POST', '/api/auth/registroAlumnoCurso', 
        ['alumno_id' => '2',
        'curso_id'=>'2',
        'estado' => '1'
        ]);
        $response
        ->assertStatus(200)
        ->assertJson([
            'alumno_id' => '2',
            'curso_id'=>'2',
            'estado' => '1'
        ]);
    }
    
    public function testCreateAlumnoUserExample(){
        $response = $this->withHeaders([
            'X-Header' => 'Value',
            'Authorization' => TestCase::$bearer
        ])->json('POST', '/api/auth/registroAlumnoUser', 
        ['alumno_id' => '2',
        'user_id'=>'3',
        'parentesco' => 'Padre'
        ]);
        $response
        ->assertStatus(200)
        ->assertJson([
            'alumno_id' => '2',
            'user_id'=>'3',
            'parentesco' => 'Padre'
        ]);
    }*/
    public function testAlumnoCursosExample(){
        $response = $this->withHeaders([
            'X-Header' => 'Value',
            'Authorization' => TestCase::$bearer
        ])->json('GET', '/api/auth/alumno/1/cursos'
        );
        $response->assertStatus(200);
    }
    public function testAlumnoUsersExample(){
        $response = $this->withHeaders([
            'X-Header' => 'Value',
            'Authorization' => TestCase::$bearer
        ])->json('GET', '/api/auth/alumno/1/familiares'
        );
        $response->assertStatus(200);
    }
}
