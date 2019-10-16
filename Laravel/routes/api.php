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
        Route::get('administradoresCursos/{id}','AdministradorController@cursos')->middleware('verified');
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
        Route::put('curso/{id}','CursoController@modificar')->middleware('verified');
        Route::get('cursoDocente/{id}','CursoController@miDocente')->middleware('verified');
        Route::get('cursoSeccion/{id}','CursoController@miSeccion')->middleware('verified');
        Route::get('cursoTurno/{id}','CursoController@miTurno')->middleware('verified');
    });
    Route::group(['middleware' => 'auth:api'],function(){
        Route::post('registroAlumno','AlumnoController@crear')->middleware('verified');
    });
    
    Route::group(['middleware' => 'auth:api'],function(){
        Route::post('registroAlumnoCurso','AlumnoCursoController@crear')->middleware('verified');
    });

});


