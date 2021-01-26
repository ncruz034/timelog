import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormBuilder, FormGroup} from '@angular/forms';
import {HttpClient } from '@angular/common/http';
import {AuthService} from '../../services/auth.service';
import {User} from '../../models/user.model';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  hide = true;
  email = new FormControl(null, [Validators.required, Validators.email]);
  password: String = '';

  form: FormGroup;
  user: User;
  data = <any>{};

  constructor(private authService: AuthService, private fb: FormBuilder,
              private http: HttpClient, private router: Router) {
    this.form = fb.group({
      'email': this.email,
      'password': [null, Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(16)])]
    });
  }

    onLogin(user) {

      if (!this.form.valid ) {
        this.form.setErrors({invalidOnLogin: true});
      } else {
        this.authService.login(user.email, user.password).subscribe(
          data => {
            if (data) {
              this.data = data;
             this.authService.storeUserData(this.data.token, this.data.name, user.email, this.data.user_id, this.data.isAdmin);
             console.log('The admin role is: ' + this.data.isAdmin);
             this.router.navigate(['/home']);
            } else {
              console.log('Error: Login in...');
            }
          },
          err => {console.log(err); }
        );
      }
    }

    getErrorMessage() {
      return this.email.hasError('required') ? 'You must enter a value' :
          this.email.hasError('email') ? 'Not a valid email' : '';
    }

 }




