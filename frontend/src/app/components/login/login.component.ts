import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormBuilder, FormGroup} from '@angular/forms';
import {HttpClient } from '@angular/common/http';
import {AuthService} from '../../services/auth.service';
import {User} from '../../models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})



export class LoginComponent {

  email = new FormControl(null, [Validators.required, Validators.email]);
  password:String = '';

  loginForm:FormGroup;
  user:User;

  constructor(private authService: AuthService, private fb:FormBuilder, private http:HttpClient) { 
    this.loginForm = fb.group({
      'email':this.email,
      'password':[null,Validators.compose([Validators.required,Validators.minLength(6),Validators.maxLength(16)])]
    });
  }

    onLogin(user){
      this.authService.login(user.email,user.password).subscribe((token)=>{
        console.log('This is the token:' + token);
        localStorage.setItem('token',token.toString());
      },
    error=>{console.log('There was an error...')});

     // this.user = user;
      //console.log(this.user);
    }
    
    getErrorMessage() {
      return this.email.hasError('required') ? 'You must enter a value' :
          this.email.hasError('email') ? 'Not a valid email' : '';
    }

 }


  

