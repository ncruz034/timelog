import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  uri = 'http://localhost:3000/api';
  constructor(private http: HttpClient) { }

  login(email,password){
    const auth ={
      email:email,
      password:password
    };
    return this.http.post(`${this.uri}/auth`,auth);
  }

  register(name,last,salary,position,email,password,isAdmin){
    const auth ={
      name:name,
      last:last,
      salary:salary,
      position:position,
      email:email,
      password:password,
      isAdmin:isAdmin
    };
    return this.http.post(`${this.uri}/users`,auth);
  }
  
}
