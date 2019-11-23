import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { isFulfilled } from 'q';

@Injectable({
  providedIn: 'root'
})
export class TimeService {

  uri = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getTimes() {
    return this.http.get(`${this.uri}/times`);
  }

  getUsersTime(user_id) {
    return this.http.get(`${this.uri}/times/user/${user_id}`);
  }
  getUsersWeeklyTime(user_id) {
    return this.http.get(`${this.uri}/times/weekly/${user_id}`);
  }
  getUsersTimeRange(user_id, from, to) {
    return this.http.get(`${this.uri}/times/user/${user_id}`);
  }

  getTimeById(id) {
    return this.http.get(`${this.uri}/times/${id}`);
  }


  geTimesByOrderId(order_id) {
    return this.http.get(`${this.uri}/times/order/${order_id}`);
  }

  addTime(newTime) {
    return this.http.post(`${this.uri}/times`, newTime);
  }

   editTime(id, updatedTime) {

    return this.http.put(`${this.uri}/times/update/${id}`, updatedTime);
  }

  deleteTime(id) {
    return this.http.delete(`${this.uri}/times/delete/${id}`);
  }
}
