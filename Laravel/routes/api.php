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
        Route::get('administrador/{id}','AdministradorController@obtener')->middleware('verified');
        Route::put('administrador/{id}','AdministradorController@modificar')->middleware('verified');
        Route::get('administradores','AdministradorController@lista')->middleware('verified');
    });
    Route::group(['middleware' => 'auth:api'],function(){
        Route::get('familiar/{id}','FamiliarController@obtener')->middleware('verified');
        Route::put('familiar/{id}','FamiliarController@modificar')->middleware('verified');
        Route::get('familiares','FamiliarController@lista')->middleware('verified');
    });

});


