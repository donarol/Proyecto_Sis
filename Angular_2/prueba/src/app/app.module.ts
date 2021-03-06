import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes} from '@angular/router';
import { FormsModule }   from '@angular/forms';

import { FullCalendarModule} from '@fullcalendar/angular';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

import { TreeModule } from 'angular-tree-component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

import { LoginComponent } from './login/login.component';
import { AdministradorInicioComponent } from './administrador-inicio/administrador-inicio.component';
import { AlumnoNuevoComponent } from './alumno-nuevo/alumno-nuevo.component';
import { ConfiguracionesAdministradorComponent } from './configuraciones-administrador/configuraciones-administrador.component';
import { CuentaAdministradorComponent } from './cuenta-administrador/cuenta-administrador.component';
import { CursoDatosComponent } from './curso-datos/curso-datos.component';
import { CursoDatosIIComponent } from './curso-datos-ii/curso-datos-ii.component';
import { CursoInicioComponent } from './curso-inicio/curso-inicio.component';
import { CursoNuevoComponent } from './curso-nuevo/curso-nuevo.component';
import { HomeAdministradorComponent } from './home-administrador/home-administrador.component';
import { InicioComponent } from './inicio/inicio.component';
import { InicioAdministradorComponent } from './inicio-administrador/inicio-administrador.component';
import { InicioFamiliarComponent } from './inicio-familiar/inicio-familiar.component';
import { ListaAlumnosComponent } from './lista-alumnos/lista-alumnos.component';
import { ListaCamarasComponent } from './lista-camaras/lista-camaras.component';
import { ListaDocentesComponent } from './lista-docentes/lista-docentes.component';
import { ListaInicioComponent } from './lista-inicio/lista-inicio.component';
import { MenuComponent } from './menu/menu.component';
import { MenuAdministradorComponent } from './menu-administrador/menu-administrador.component';
import { MenuEventosComponent } from './menu-eventos/menu-eventos.component';
import { MenuFamiliarComponent } from './menu-familiar/menu-familiar.component';
import { MenuModificarComponent } from './menu-modificar/menu-modificar.component';
import { MenuModificarIiComponent } from './menu-modificar-ii/menu-modificar-ii.component';
import { MenuNuevoComponent } from './menu-nuevo/menu-nuevo.component';
import { MenuOpcionesAdministradorComponent } from './menu-opciones-administrador/menu-opciones-administrador.component';
import { PantallaCargaComponent } from './pantalla-carga/pantalla-carga.component';
import { PrincipalComponent } from './principal/principal.component';
import { RegistroComponent } from './registro/registro.component';
import { RegistroAdministradorComponent } from './registro-administrador/registro-administrador.component';
import { SeccionInicioComponent } from './seccion-inicio/seccion-inicio.component';
import { SeleccionCursoComponent } from './seleccion-curso/seleccion-curso.component';
import { SeleccionCursoIiComponent } from './seleccion-curso-ii/seleccion-curso-ii.component';
import { SeleccionDocenteComponent } from './seleccion-docente/seleccion-docente.component';
import { SeleccionFamiliarComponent } from './seleccion-familiar/seleccion-familiar.component';
import { SeleccionFamiliarIiComponent } from './seleccion-familiar-ii/seleccion-familiar-ii.component';
import { SeleccionSeccionComponent } from './seleccion-seccion/seleccion-seccion.component';
import { SeleccionTurnoComponent } from './seleccion-turno/seleccion-turno.component';
import { TurnoDatosComponent } from './turno-datos/turno-datos.component';
import { TurnoInicioComponent } from './turno-inicio/turno-inicio.component';
import { TurnoNuevoComponent } from './turno-nuevo/turno-nuevo.component';
import { CursoBorrarComponent } from './curso-borrar/curso-borrar.component';
import { CursoBorrarIiComponent } from './curso-borrar-ii/curso-borrar-ii.component';
import { HomeFamiliarComponent } from './home-familiar/home-familiar.component';
import { AlumnoDatosComponent } from './alumno-datos/alumno-datos.component';
import { AlumnoDatosPersonalComponent } from './alumno-datos-personal/alumno-datos-personal.component';
import { AlumnoDatosFamiliarComponent } from './alumno-datos-familiar/alumno-datos-familiar.component';
import { CamaraDatosComponent } from './camara-datos/camara-datos.component';
import { CamaraNuevoComponent } from './camara-nuevo/camara-nuevo.component';
import { CamaraInicioComponent } from './camara-inicio/camara-inicio.component';
import { CamaraModificarComponent } from './camara-modificar/camara-modificar.component';
import { CamaraModificarIiComponent } from './camara-modificar-ii/camara-modificar-ii.component';


const router: Routes=[
  {path:'',component:InicioComponent},
  {path:'',component:PrincipalComponent,children:[
   /* {path:'user/:id',component:InicioFamiliarComponent},*/
    {path:'',component:InicioFamiliarComponent,children:[
      {path:'homeFamiliar',component:HomeFamiliarComponent},
     // {path:'cuentaFamiliar',component:CuentaFamiliarComponent},
      {path:'menuFamiliar',component:MenuComponent}
    ]}
     ,
    {path:'',component:InicioAdministradorComponent,children:[
      {path:'',component:HomeAdministradorComponent,children:[
        {path:'homeAdministrador/Curso/:id',component:ListaInicioComponent},
        {path:'homeAdministrador',component:ListaInicioComponent},
        {path:'homeAdministrador/Alumno/:id',component:AlumnoDatosComponent},
        {path:'homeAdministrador/Camara/:id',component:CamaraDatosComponent}
      ]},
      {path:'cuentaAdministrador',component:CuentaAdministradorComponent},
      {path:'',component:MenuAdministradorComponent,children:[
        {path:'menuAdministrador',component:MenuComponent},
        {path:'menuNuevo',component:MenuNuevoComponent},
        {path:'menuModificar',component:MenuModificarComponent}
      ]},
      {path:'',component:ConfiguracionesAdministradorComponent,children:[
        {path:'cursos',component:CursoInicioComponent},
        {path:'cursoNuevo',component:CursoNuevoComponent},
        {path:'cursoModificar',component:CursoDatosComponent},
        {path:'cursoBorrar',component:CursoBorrarComponent},
        {path:'secciones',component:SeccionInicioComponent},
        {path:'turnos',component:TurnoInicioComponent},
        {path:'turnoNuevo',component:TurnoNuevoComponent},
        {path:'turno/:id',component:TurnoDatosComponent},
        {path:'camaras',component:CamaraInicioComponent},
        {path:'camaraNuevo',component:CamaraNuevoComponent},
        {path:'camaraModificar',component:CamaraModificarComponent},
        /*{path:'camaraModificar/:id',component:CamaraModificarIiComponent},*/
        {path:'administrador_inicio',component:AdministradorInicioComponent},
        {path:'cuentaAdministrador/:id',component:CuentaAdministradorComponent}
      ]},
      {path:'inscribirAlumno',component:AlumnoNuevoComponent}
    ]}
    /*{path:'',component:MenuComponent,children:[
      {path:'listaAlumnos',component:ListaAlumnosComponent}
    ]},*/
    //{path:'admin/:id',component:InicioAdministradorComponent}
  ]}
  
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdministradorInicioComponent,
    AlumnoNuevoComponent,
    ConfiguracionesAdministradorComponent,
    CuentaAdministradorComponent,
    CursoDatosComponent,
    CursoDatosIIComponent,
    CursoInicioComponent,
    CursoNuevoComponent,
    HomeAdministradorComponent,
    InicioComponent,
    InicioAdministradorComponent,
    InicioFamiliarComponent,
    ListaAlumnosComponent,
    ListaCamarasComponent,
    ListaDocentesComponent,
    ListaInicioComponent,
    MenuComponent,
    MenuAdministradorComponent,
    MenuEventosComponent,
    MenuFamiliarComponent,
    MenuModificarComponent,
    MenuModificarIiComponent,
    MenuNuevoComponent,
    MenuOpcionesAdministradorComponent,
    PantallaCargaComponent,
    PrincipalComponent,
    RegistroComponent,
    RegistroAdministradorComponent,
    SeccionInicioComponent,
    SeleccionCursoComponent,
    SeleccionCursoIiComponent,
    SeleccionDocenteComponent,
    SeleccionFamiliarComponent,
    SeleccionFamiliarIiComponent,
    SeleccionSeccionComponent,
    SeleccionTurnoComponent,
    TurnoDatosComponent,
    TurnoInicioComponent,
    TurnoNuevoComponent,
    CursoBorrarComponent,
    CursoBorrarIiComponent,
    HomeFamiliarComponent,
    AlumnoDatosComponent,
    AlumnoDatosPersonalComponent,
    AlumnoDatosFamiliarComponent,
    CamaraDatosComponent,
    CamaraNuevoComponent,
    CamaraInicioComponent,
    CamaraModificarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(router),
    FormsModule,
    BrowserAnimationsModule,//
    FullCalendarModule,//
    TreeModule.forRoot(), MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
