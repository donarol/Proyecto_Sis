import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { User } from '../modelos/User';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  getUserActual():Observable<User>{
    return this.http.get<User>('http://homestead.test/api/auth/user',this.token());
  }
  getUser(id):Observable<User>{
    return this.http.get<User>(`http://homestead.test/api/auth/user${id}`,this.token());
  }
  updateUser(user:User):Observable<User>{
    return this.http.put<User>(``,user,this.token());
  }
  
  token(){
     return {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer '+localStorage.getItem('accto')
      })
    };
  }
}
