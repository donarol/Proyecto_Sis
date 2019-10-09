<?php
use App\User;
use App\Mail\MailtrapExample;
use Illuminate\Support\Facades\Mail;
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
Auth::routes(['verify'=>true]);

Route::get('/send-mail', function () {

    Mail::to('mancachirolando@gmail.com')->send(new MailtrapExample()); 

    return 'A message has been sent to Mailtrap!';

});
/*
Route::get('enviar', ['as' => 'enviar', function () {
 
    $data = ['link' => 'http://styde.net'];
 
    \Mail::send('', $data, function ($message) {
 
        $message->from('email@styde.net', 'Styde.Net');
 
        $message->to('user@example.com')->subject('Notificación');
 
    });
 
    return "Se envío el email";
}]);*/
/*
Route::post('/registroFamiliar','FamiliarController@crear');
Route::get('/registroFamiliar','FamiliarController@crearMal');
Route::post('/loginFamiliar','FamiliarController@login');
Route::get('/loginFamiliar','FamiliarController@loginMal');
Route::get('/familiar/{id}','FamiliarController@obtener');
Route::put('/familiar/{id}','FamiliarController@modificar');

Route::post('/registroTurno','TurnoController@crear');
Route::get('/registroTurno','TurnoController@crearMal');
Route::get('/turnos','TurnoController@lista');
Route::get('/turno/{id}','TurnoController@obtener');
Route::put('/turno/{id}','TurnoController@modificar');

Route::get('/roles','RolController@lista');
Route::get('/rol/{id}','RolController@obtener');*/
/*
Route::get('Cursos',function(){
    $lista = User::find(10)->cursos;
    return $lista;
});*/