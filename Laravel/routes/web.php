<?php
use App\Modelos\Familiar;
use App\Modelos\Persona;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
/*Route::post('/persona','PersonaController@crear');
Route::get('/persona','PersonaController@index');

Route::get('/familiar/1',function(){
    return Familiar::find(1)->persona;
});*/

Route::post('/registroFamiliar','FamiliarController@crear');
Route::get('/registroFamiliar','FamiliarController@crearMal');
Route::post('/loginFamiliar','FamiliarController@login');
Route::get('/loginFamiliar','FamiliarController@loginMal');
Route::get('/familiar/{id}','FamiliarController@obtener');
Route::put('/familiar/{id}','FamiliarController@modificar');

Route::post('/registroAdministrador','AdministradorController@crear');
Route::get('/registroAdministrador','AdministradorController@crearMal');
Route::post('/loginAdministrador','AdministradorController@login');
Route::get('/loginAdministrador','AdministradorController@loginMal');
Route::get('/administrador/{id}','AdministradorController@obtener');
Route::put('/administrador/{id}','AdministradorController@modificar');

Route::post('/registroTurno','TurnoController@crear');
Route::get('/registroTurno','TurnoController@crearMal');
Route::get('/turnos','TurnoController@lista');
Route::get('/turno/{id}','TurnoController@obtener');
Route::put('/turno/{id}','TurnoController@modificar');