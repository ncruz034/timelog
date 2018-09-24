import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  uri = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  addUserTime(user_id, time_id) {
    const updatedUserTime = {
      time_id: time_id,
    };
    return this.http.post(`${this.uri}/users/update/times${user_id}`, updatedUserTime);
  }


}
