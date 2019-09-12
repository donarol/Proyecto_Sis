import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes} from '@angular/router';
import { FormsModule }   from '@angular/forms';

//Servicios
import {LoginService} from './servicios/login.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { InicioComponent } from './inicio/inicio.component';
import { RegistroComponent } from './registro/registro.component';
import { PrincipalComponent } from './principal/principal.component';
import { MenuComponent } from './menu/menu.component';
import { ListaAlumnosComponent } from './lista-alumnos/lista-alumnos.component';
import { CuentaTutorComponent } from './cuenta-tutor/cuenta-tutor.component';
import { ListaDocentesComponent } from './lista-docentes/lista-docentes.component';
import { ListaCamarasComponent } from './lista-camaras/lista-camaras.component';
import { LoginAdministradorComponent } from './login-administrador/login-administrador.component';
import { RegistroAdministradorComponent } from './registro-administrador/registro-administrador.component';

const router: Routes=[
  {path:'',component:InicioComponent},
  {path:'',component:PrincipalComponent,children:[
    {path:'miCuenta/:id',component:CuentaTutorComponent},
    {path:'listaAlumnos/:id',component:ListaAlumnosComponent},
    {path:'lista/:id',component:MenuComponent}/*,
    {path:'',component:MenuComponent,children:[
      {path:'listaAlumnos',component:ListaAlumnosComponent}
    ]}*/
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
    CuentaTutorComponent,
    ListaDocentesComponent,
    ListaCamarasComponent,
    LoginAdministradorComponent,
    RegistroAdministradorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(router),
    FormsModule
  ],
  providers: [
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
