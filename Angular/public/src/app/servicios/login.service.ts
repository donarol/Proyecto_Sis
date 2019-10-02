import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { User } from '../modelos/User';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  constructor(private http: HttpClient) {}
 /*ceritificados del pni,pmbok*/
  login(user:User):Observable<any>{
    return this.http.post<any>('http://homestead.test/api/auth/login',user,this.token());
  }
  create(user:User):Observable<User>{
    return this.http.post<User>('http://homestead.test/api/auth/signup',user,this.token());
  }
  logout(){
    return this.http.get('http://homestead.test/api/auth/logout',this.token(true));
  }
  token(con?:boolean){
    let cat:string='';
    if(con)
      cat='Bearer '+localStorage.getItem('accto');
    else
      cat='my-auth-token'
    console.log(cat);
    return {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': cat
      })
    };
  }
}
