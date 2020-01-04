import { Component } from '@angular/core';
import {
  FormControl,
  Validators,
  FormBuilder,
  FormGroup
} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {
  successMessage = '';
  color = 'accent';
  checked = false;
  disabled = false;
  hide = true;
  email = new FormControl(null, [Validators.required, Validators.email]);
  name: String = '';
  last: String = '';
  // salary: Number = null;
  // position: String = '';
  // isAdmin: Boolean = false;
  password: String = '';
  registerForm: FormGroup;
  user: User;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private http: HttpClient,
    private authService: AuthService
  ) {
    this.registerForm = fb.group({
      name: [null, Validators.required],
      last: [null, Validators.required],
      // 'salary': [null, Validators.required],
      // 'position': [null, Validators.required],
      email: this.email,
      password: [
        null,
        Validators.compose([
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(16)
        ])
      ],
      password2: [
        null,
          Validators.compose([
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(16)
        ])
      ]
      // 'isAdmin': this.isAdmin,
    });
  }

  onRegister(user) {
    this.authService.register(user.name, user.last, user.email, user.password)
      .subscribe(
        token => {
          this.router.navigate(['/auth']);
        },
        error => {
          console.log('There was an error...');
        }
      );
  }

  getErrorMessage() {
    return this.email.hasError('required')
      ? 'You must enter a value'
      : this.email.hasError('email')
        ? 'Not a valid email'
        : '';
  }
}
