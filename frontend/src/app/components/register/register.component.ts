import { Component} from '@angular/core';
import {FormControl, Validators, FormBuilder, FormGroup} from '@angular/forms';
import {HttpClient } from '@angular/common/http';
import {AuthService} from '../../services/auth.service';
import {User} from '../../models/user.model';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {
  successMessage = '';
  color = 'accent';
  checked = false;
  disabled = false;

  email = new FormControl(null, [Validators.required, Validators.email]);
  name:String = '';
  last:String = '';
  salary:Number=null;
  position:String = '';
  isAdmin:Boolean = true;
  password:String = '';
  registerForm:FormGroup;
  user:User;
  private _registerUrl = "http://localhost:3000/api/auth";

  constructor(private fb:FormBuilder, private http:HttpClient, private authService:AuthService) {

    this.registerForm = fb.group({
      'name':[null,Validators.required],
      'last':[null,Validators.required],
      'salary':[null,Validators.required],
      'position':[null,Validators.required],
      'email':this.email,
      'password':[null,Validators.compose([Validators.required,Validators.minLength(6),Validators.maxLength(16)])],
      //'isAdmin': this.isAdmin,
    });
   }

  onRegister(user){
    this.authService.register(user.name,user.last,parseFloat(user.salary),user.position,user.email,user.password,user.isAdmin).subscribe(
      (token)=>{
        console.log('This is the token:' +  token.toString());
        localStorage.setItem('token',token.toString());
      },
    error=>{console.log('There was an error...')}
     //localStorage.setItem('token',res)
    );
    //return this.http.post(this._registerUrl,user);
    //this.user = user;
    //console.log(this.user);
  }

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' : '';
  }
}