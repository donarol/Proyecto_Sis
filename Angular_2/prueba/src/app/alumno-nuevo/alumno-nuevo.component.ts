import { Component, OnInit } from '@angular/core';
import { Alumno } from '../modelos/Alumno';
import { AlumnoService } from '../servicios/alumno.service';
import { Errores } from '../modelos/Errores';
import { formatDate } from '@angular/common';
import { Curso } from '../modelos/Curso';
import { Turno } from '../modelos/Turno';
import { TurnoService } from '../servicios/turno.service';
import { NgForm } from '@angular/forms';
import { AlumnoCursoService } from '../servicios/alumno-curso.service';
import { Alumno_Curso } from '../modelos/Alumno_Curso';
import { User } from '../modelos/User';
import { Familiar } from '../modelos/Familiar';
import { AlumnoUserService } from '../servicios/alumno-user.service';
import { Alumno_User } from '../modelos/Alumno_User';
import { UserService } from '../servicios/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alumno-nuevo',
  templateUrl: './alumno-nuevo.component.html',
  styleUrls: ['./alumno-nuevo.component.css']
})
export class AlumnoNuevoComponent implements OnInit {
  private alergias:String[];
  private alumno:Alumno;
  private errors:Errores[];
  private curso:Curso;
  private turno:Turno;
  private spinnerTurno:Boolean;
  private spinner:Boolean;
  private familiares:Familiar[];
  private isMuestra:Boolean;
  constructor(
    private _alumno:AlumnoService,
    private _turno:TurnoService,
    private _alumnoCurso:AlumnoCursoService,
    private _alumnoUser:AlumnoUserService,
    private _user:UserService,
    private _router:Router
  ) {}

  ngOnInit() {
    this.isAdministrador();
    this.alumno=new Alumno;
    this.curso=new Curso;
    this.turno=new Turno;
    this.spinnerTurno=false;
    this.spinner=false;
    this.isMuestra=false;
    this.errors=[];
    this.alergias=[];
    this.familiares=[];
    this.setErrors();
    this.isMuestra=true;
//https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog
  }
  isAdministrador(){
    this._user.getUserActual().subscribe(res=>{
      console.log("mi res");
      console.log(res);
      if(res.tipo==='Administrador' || res.tipo==='Docente'){
        console.log("es administrador");

      }else{
        console.log("no es administrador");
        alert("Usted no es administrador");
        this.isMuestra=false;
        this._router.navigate(['']);
      }
    });
  }

  inscribirAlumno(form:NgForm){
    console.log(form);
    if(form.valid){
      console.log("es valido");
      this.spinner=true;
      this._alumno.addAlumno(this.alumno).subscribe(res=>{
        console.log("mi res");
        console.log(res);
        if(res.alumno_id=='0'){
          console.log("no se inscribra al Alumno");
          this.errors[10].getError();
        }else{
          console.log("Se inscribira al Alumno");
          this.addAlumnoCurso(res);
          this.addAlumnoUser(res);
          this.spinner=false;
        }
      },error=>{
        console.log("mi error");
        console.log(error);
        this.spinner=false;
        this.errors[0].getError();
      });
    }else{
      console.log("no es valido");
      if(form.controls.nombre.status==='INVALID')
        this.errors[1].getError();
      if(form.controls.apellido.status==='INVALID')
        this.errors[2].getError();
      if(form.controls.fecha_nacimiento.status==='INVALID')
        this.errors[3].getError();
      if(form.controls.lugar_nacimiento.status==='INVALID')
        this.errors[4].getError();
      if(form.controls.tipo_sanguineo.status==='INVALID')
        this.errors[5].getError();
      if(form.controls.telefono.status==='INVALID')
        this.errors[6].getError();
      if(form.controls.domicilio.status==='INVALID')
        this.errors[7].getError();
      if(form.controls.curso.status==='INVALID')
        this.errors[8].getError();
      if(form.controls.turno.status==='INVALID')
        this.errors[9].getError();
    }
   /* */
  }
  addAlumnoCurso(alumno:Alumno):void{
    var aux=new Alumno_Curso;
    aux.alumno_id=alumno.alumno_id;
    aux.curso_id=this.curso.curso_id;
    aux.estado=true;
    this.spinner=true;
    this._alumnoCurso.addAlumnoCurso(aux).subscribe(res=>{
      console.log("mi res");
      console.log(res);
      this.spinner=false;
      this.errors[11].getError();
    },error=>{
      console.log("mi error");
      console.log(error);
      this.spinner=false;
      this.errors[0].getError();
    });
  }
  addAlumnoUser(alumno:Alumno):void{
    this.familiares.forEach(element => {
      this.spinner=true;
      var aux_2=new Alumno_User;
      aux_2.alumno_id=alumno.alumno_id;
      aux_2.user_id=element.id;
      aux_2.parentesco=element.parentesco;
      this._alumnoUser.addAlumnoUser(aux_2).subscribe(res=>{
        console.log("mi res");
        console.log(res);
      });
    },error=>{
      console.log("mi error");
      console.log(error);
      this.spinner=false;
      this.errors[12].getError();
    });
    this.spinner=false;
  }
  SelecCurso(curso:Curso){
    console.log("me llego curso: ");
    console.log(curso);
    this.curso=curso;
    this.cargaTurno(this.curso.turno_id);
  }
  cargaTurno(id:String){
    this.spinnerTurno=true;
    this._turno.getTurno(id).subscribe(res=>{
      console.log("mi res");
      console.log(res);
      this.turno=res;
      this.spinnerTurno=false;
    },error=>{
      console.log("mi error");
      console.log(error);
      this.spinnerTurno=false;
      this.errors[13].getError();
    });
  }
  SelectFamilar(familiar){
    console.log("me llego ");
    console.log(familiar);
    if(this.isFamiliar(familiar))
      alert("ya agrego a esta persona");
    else
      this.familiares.push(familiar);

  }
  isFamiliar(familiar):Boolean{
    for (let index = 0; index < this.familiares.length; index++) {
      if(this.familiares[index].id==familiar.id)
        return true;
    }
    return false;
  }
  removeFamiliar(index){
    console.log(this.familiares.splice(index,1));
  }

  setErrors():void{
    this.errors.push(new Errores('Error al inscribir al alumno'));
    this.errors.push(new Errores('Error al ingresar el nombre'));
    this.errors.push(new Errores('Error al ingresar el apellido'));
    this.errors.push(new Errores('Error al ingresar la fecha de nacimiento'));
    this.errors.push(new Errores('Error al ingresar el lugar de nacimiento'));
    this.errors.push(new Errores('Error al ingresar el tipo sanguineo'));
    this.errors.push(new Errores('Error al ingresar el telefono'));
    this.errors.push(new Errores('Error al ingresar el domicilio'));
    this.errors.push(new Errores('Error al ingresar el curso'));
    this.errors.push(new Errores('Error al ingresar el turno'));//9

    this.errors.push(new Errores('Esta persona ya se encuentra en el Sistema'));//10

    this.errors.push(new Errores('Se inscribio correctamente al Alumno'));//11

    this.errors.push(new Errores('Error al Asociar el familar con el Alumno'));//12

    this.errors.push(new Errores('Error al carga el Turno'));//13
  }
}
