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
/*Route::get('MisDocentes/{id}',function($id){
    $lista = App\Modelos\Curso::find($id);

    echo $lista->user;
});
*/
/*
Route::get("/alumno/{id}/cursos",function($id){
    $alumno=App\Modelos\Alumno::find($id)->cursos;
    foreach($alumno as $c){
        echo $c;
    }
});
*/
/*
Route::get('platoFecha/{fecha}','PlatoController@obtenerFecha');
Route::get('plato/{id}/ingredientesp',function($id){
    return App\Modelos\Plato::find($id)->ingredientes;
});       

Route::get("/alumno/{id}/cursos",function($id){
    $alumno=App\Modelos\Alumno::find($id)->cursos;
    return $alumno;
});*/
/*Route::get("/alumno/{id}/familiares",function($id){
    $alumno=App\Modelos\Alumno::find($id)->familiares;
    return $alumno;
});*/
/*
Route::get("/cursosLista",function(){
    $curso = App\Modelos\Curso::
    join('secciones', function ($join) {
        $join->on('cursos.seccion_id', '=', 'secciones.seccion_id')
             ->where('secciones.seccion_id', '=', 1);
    })
    ->join('turnos', function ($join) {
        $join->on('cursos.turno_id', '=', 'turnos.turno_id')
             ->where([
                 ['turnos.turno_id', '=',10],
                 ['turnos.gestion','=',2020]
             ]);
    })
    ->select('cursos.*')
    ->get();
    return $curso;    
});*/
/*
Route::get("/curso/{id}/alumnos",function($id){
    $alumno=App\Modelos\Curso::find($id)->alumnos;
    return $alumno;
});*/
/*
Route::get("verTurno",function(){
     $turno=App\Modelos\Turno::where('nombre','turno 1')->exists();
     if($turno==true){
         echo "existe";
     }else{
         echo "no existe";
     }
    echo $turno;
});*/
