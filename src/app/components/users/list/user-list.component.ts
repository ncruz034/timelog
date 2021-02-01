import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {


  constructor(private authService: AuthService, private router: Router, private userService: UserService) { }
  users: User[];
  filteredUsers: User[];
  private _searchTerm: string;

  ngOnInit() {
    this.fetchUsers();
  }


  get searchTerm(): string {
    return this._searchTerm;
  }

  set searchTerm(value: string){
    this._searchTerm = value;
    this.filteredUsers = this.filtereUsers(value);
  }
  filtereUsers(searchString: string) {
    return this.users.filter(user =>
      user.name.toString().toLowerCase().indexOf(searchString.toLowerCase()) !== -1);
  }

  fetchUsers() {
    this.userService.getUsers().subscribe(
      (data: User[]) => {
        this.users = data;
        this.filteredUsers = data;
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

  
  editUser(id) {
    console.log('Edditing user id: ' + id);
    this.router.navigate([`users/edit/${id}`]);
  }
  userDetails(id){
    this.router.navigate([`users/detail/${id}`]);
  }

  deleteUser(id) {
    this.userService.deleteUser(id).subscribe(() => {
      this.fetchUsers();
    });
  }



}
