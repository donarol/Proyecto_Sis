import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes} from '@angular/router';
import { FormsModule }   from '@angular/forms';

//Servicios
import {LoginService} from './servicios/login.service';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { InicioComponent } from './inicio/inicio.component';
import { RegistroComponent } from './registro/registro.component';
import { PrincipalComponent } from './principal/principal.component';
import { MenuComponent } from './menu/menu.component';
import { ListaAlumnosComponent } from './lista-alumnos/lista-alumnos.component';
import { ListaDocentesComponent } from './lista-docentes/lista-docentes.component';
import { ListaCamarasComponent } from './lista-camaras/lista-camaras.component';
import { LoginAdministradorComponent } from './login-administrador/login-administrador.component';
import { RegistroAdministradorComponent } from './registro-administrador/registro-administrador.component';
import { MenuAdministradorComponent } from './menu-administrador/menu-administrador.component';
import { MenuFamiliarComponent } from './menu-familiar/menu-familiar.component';
import { InicioAdministradorComponent } from './inicio-administrador/inicio-administrador.component';
import { InicioFamiliarComponent } from './inicio-familiar/inicio-familiar.component';
import { CuentaFamiliarComponent } from './cuenta-familiar/cuenta-familiar.component';
import { CuentaAdministradorComponent } from './cuenta-administrador/cuenta-administrador.component';
import { ConfiguracionesAdministradorComponent } from './configuraciones-administrador/configuraciones-administrador.component';
import { TurnoInicioComponent } from './turno-inicio/turno-inicio.component';
import { TurnoNuevoComponent } from './turno-nuevo/turno-nuevo.component';

const router: Routes=[
  {path:'',component:InicioComponent},
  {path:'',component:PrincipalComponent,children:[
   /* {path:'user/:id',component:InicioFamiliarComponent},*/
    {path:'',component:InicioFamiliarComponent,children:[
      {path:'userInicio/:id',component:MenuComponent},
      {path:'userCuenta/:id',component:CuentaFamiliarComponent}
    ]}
     ,
    {path:'',component:InicioAdministradorComponent,children:[
      {path:'adminCuenta/:id',component:CuentaAdministradorComponent},
      {path:'',component:ConfiguracionesAdministradorComponent,children:[
        {path:'turnos',component:TurnoInicioComponent},
        {path:'turnoNuevo',component:TurnoNuevoComponent}
      ]}
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
    InicioComponent,
    RegistroComponent,
    PrincipalComponent,
    MenuComponent,
    ListaAlumnosComponent,
    ListaDocentesComponent,
    ListaCamarasComponent,
    LoginAdministradorComponent,
    RegistroAdministradorComponent,
    MenuAdministradorComponent,
    MenuFamiliarComponent,
    InicioAdministradorComponent,
    InicioFamiliarComponent,
    CuentaFamiliarComponent,
    CuentaAdministradorComponent,
    ConfiguracionesAdministradorComponent,
    TurnoInicioComponent,
    TurnoNuevoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(router),
    FormsModule,
    HttpClientModule
  ],
  providers: [
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
