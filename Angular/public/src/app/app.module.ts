import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes} from '@angular/router';
import { FormsModule }   from '@angular/forms';

//Servicios
import {LoginTutorService} from './servicios/login-tutor.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { InicioComponent } from './inicio/inicio.component';
import { RegistroComponent } from './registro/registro.component';
import { PrincipalComponent } from './principal/principal.component';
import { MenuComponent } from './menu/menu.component';
import { ListaAlumnosComponent } from './lista-alumnos/lista-alumnos.component';

const router: Routes=[
  {path:'',component:InicioComponent},
  {path:'principal',component:PrincipalComponent},
  {path:'',component:PrincipalComponent,children:[
    {path:'miCuenta',component:MenuComponent},
    {path:'listaAlumnos',component:ListaAlumnosComponent}
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
    ListaAlumnosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(router),
    FormsModule
  ],
  providers: [
    LoginTutorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
