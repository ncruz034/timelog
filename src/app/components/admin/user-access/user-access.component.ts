import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { User } from '../../../models/user.model';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-access',
  templateUrl: './user-access.component.html',
  styleUrls: ['./user-access.component.css']
})
export class UserAccessComponent implements OnInit {

  users:User[];
  filteredUsers:User[];
  constructor(private userService:UserService, private router:Router) { }

  ngOnInit() {
    this.fetchUsers();
  }
  fetchUsers() {
    this.userService.getUsers().subscribe(
      (data: User[]) => {
        this.users = data;
        this.filteredUsers = data;
        console.log(this.users);
      },
      err => {
        if (err instanceof HttpErrorResponse) {
            if (err.status === 401) {
              this.router.navigate(['/auth']);
            }
        }
      }
    );
  }

}
