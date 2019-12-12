<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

/*Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});*/
Route::group(['prefix' => 'auth'], function () {
    Route::post('login', 'AuthController@login');//->middleware('verified');
    Route::get('login','AuthController@loginMal');
    Route::post('signup', 'AuthController@crear');
    Route::get('signup','AuthController@crearMal');

    Route::group(['middleware' => 'auth:api'], function() {
        Route::get('logout', 'AuthController@logout');
        Route::get('user', 'AuthController@user');
        
    });
    Route::group(['middleware' => 'auth:api'],function(){
        Route::get('user/{id}','UserController@obtener')->middleware('verified');
        Route::put('user/{id}','UserController@modificar')->middleware('verified');
      
        //---
        //Route::get('familiares','FamiliarController@lista')->middleware('verified');
    });
    Route::group(['middleware' => 'auth:api'],function(){
        Route::get('administradores','AdministradorController@lista')->middleware('verified');
        Route::get('administrador/{id}/cursos','AdministradorController@cursos')->middleware('verified');
    });
    Route::group(['middleware' => 'auth:api'],function(){
        Route::get('familiares','FamiliarController@lista')->middleware('verified');
    });
    Route::group(['middleware' => 'auth:api'],function(){
        Route::post('registroTurno','TurnoController@crear')->middleware('verified');
        Route::get('registroTurno','TurnoController@crearMal')->middleware('verified');
        Route::get('turnos','TurnoController@lista')->middleware('verified');
        Route::get('turno/{id}','TurnoController@obtener')->middleware('verified');
        Route::put('turno/{id}','TurnoController@modificar')->middleware('verified');
        Route::delete('borrarTurno/{id}','TurnoController@borrar')->middleware('verified');
    });
    Route::group(['middleware' => 'auth:api'],function(){
        Route::get('secciones','SeccionController@lista')->middleware('verified');
        Route::get('seccion/{id}','SeccionController@obtener')->middleware('verified');
        Route::put('seccion/{id}','SeccionController@modificar')->middleware('verified');
    });
    Route::group(['middleware' => 'auth:api'],function(){
        Route::post('registroCurso','CursoController@crear')->middleware('verified');
        Route::get('registroCurso','CursoController@crearMal')->middleware('verified');
        Route::get('cursos','CursoController@lista')->middleware('verified');
        Route::get('curso/{id}','CursoController@obtener')->middleware('verified');
        Route::post('cursoLista','CursoController@obtenerLista')->middleware('verified');
        Route::get('curso/{id}/alumnos','CursoController@alumnos')->middleware('verified');
        Route::get('curso/{id}/camaras','CursoController@camaras')->middleware('verified');
        Route::put('curso/{id}','CursoController@modificar')->middleware('verified');
        Route::get('cursoDocente/{id}','CursoController@miDocente')->middleware('verified');
        Route::get('cursoSeccion/{id}','CursoController@miSeccion')->middleware('verified');
        Route::get('cursoTurno/{id}','CursoController@miTurno')->middleware('verified');
        Route::delete('borrarCurso/{id}','CursoController@borrar')->middleware('verified');
    });
    Route::group(['middleware' => 'auth:api'],function(){
        Route::post('registroAlumno','AlumnoController@crear')->middleware('verified');
       // Route::get('alumno/{id}/curso','AlumnoCursoController@obtener')->middleware('verified');
        Route::get('alumno/{id}','AlumnoController@obtener')->middleware('verified');
        Route::put('alumno/{id}','AlumnoController@modificar')->middleware('verified');
        Route::get('alumno/{id}/familiares','AlumnoController@familiares')->middleware('verified');
    }); 
    Route::group(['middleware' => 'auth:api'],function(){
        Route::post('registroAlumnoCurso','AlumnoCursoController@crear')->middleware('verified');
        Route::get('alumno/{id}/cursos','AlumnoCursoController@obtener')->middleware('verified');
    });
    Route::group(['middleware' => 'auth:api'],function(){
        Route::post('registroAlumnoUser','AlumnoUserController@crear')->middleware('verified');
      //  Route::get('alumno/{id}/familiares','AlumnoUserController@obtener')->middleware('verified');
    });
    Route::group(['middleware' => 'auth:api'],function(){
        Route::post('registroIngrediente','IngredienteController@crear')->middleware('verified');
        Route::get('registroIngrediente','IngredienteController@crearMal')->middleware('verified');
        Route::get('ingredientes','IngredienteController@lista')->middleware('verified');
        Route::get('ingrediente/{id}','IngredienteController@obtener')->middleware('verified');
        Route::put('ingrediente/{id}','IngredienteController@modificar')->middleware('verified');
    });
    Route::group(['middleware' => 'auth:api'],function(){
        Route::post('registroPlato','PlatoController@crear')->middleware('verified');
        Route::get('registroPlato','PlatoController@crearMal')->middleware('verified');
        Route::get('platos','PlatoController@lista')->middleware('verified');
        Route::get('plato/{id}','PlatoController@obtener')->middleware('verified');
        Route::put('plato/{id}','PlatoController@modificar')->middleware('verified');
        Route::get('platoFecha/{fecha}','PlatoController@obtenerFecha')->middleware('verified');
        Route::get('plato/{id}/ingredientes','PlatoController@ingredientes')->middleware('verified');
    });
   
    Route::group(['middleware' => 'auth:api'],function(){
        Route::post('registroIngredientePlato','IngredientePlatoController@crear')->middleware('verified');
        Route::get('registroIngredientePlato','IngredientePlatoController@crearMal')->middleware('verified');
    });

    Route::group(['middleware' => 'auth:api'],function(){
        Route::post('registroCamara','CamaraController@crear')->middleware('verified');
        Route::get('registroCamara','CamaraController@crearMal')->middleware('verified');
        Route::get('camaras','CamaraController@lista')->middleware('verified');
        Route::get('camara/{id}','CamaraController@obtener')->middleware('verified');
        Route::put('camara/{id}','CamaraController@modificar')->middleware('verified');
    });

    Route::group(['middleware' => 'auth:api'],function(){
        Route::post('registroCamaraCurso','CamaraCursoController@crear')->middleware('verified');
    });
});


