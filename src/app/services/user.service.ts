import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import {theUri} from '../config/config';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  uri = theUri;

  constructor(private http: HttpClient) { }

  addTimeToUser(user_id, time_id) {
    const updatedUserTime = {
      time_id: time_id,
    };

    return this.http.post(`${this.uri}/users/${user_id}/time`, updatedUserTime);
  }
  getUsers() {
    return this.http.get(`${this.uri}/users`);
  }

  deleteUser(_id) {
    return this.http.delete(`${this.uri}/users/delete/${_id}`);
  }
}
