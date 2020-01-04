import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //uri = 'http://localhost:3000/api';
  uri = 'https://ssa-timelog.herokuapp.com/api';

  authToken;
  user;
  constructor(private router: Router, private http: HttpClient) { }

  login(email, password) {
    const auth = {
      email: email,
      password: password
    };
    return this.http.post(`${this.uri}/auth`, auth);
  }

  loggedIn() {
    return !!localStorage.getItem('x-auth-token');
  }

  // register(name, last, salary, position, email, password, isAdmin) {
  register(name, last, email, password) {
    const auth = {
      name: name,
      last: last,
      // salary: salary,
      // position: position,
      email: email,
      password: password,
      // isAdmin: isAdmin
    };
    return this.http.post(`${this.uri}/users`, auth);
  }

  getToken() {
    return localStorage.getItem('x-auth-token');
  }

  getUser() {
    return localStorage.getItem('user');
  }

  storeUserData(token, name,  user, user_id) {
    localStorage.setItem('x-auth-token', token);
    localStorage.setItem('name', name);
    localStorage.setItem('user', user);
    localStorage.setItem('user_id', user_id);
    this.authToken = token;
    this.user = user;
  }

  logout() {
    localStorage.removeItem('x-auth-token');
    localStorage.removeItem('user');
    localStorage.removeItem('name');
    this.router.navigate(['./home']);
  }


}
