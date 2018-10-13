import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
  getTimeById(id) {
    return this.http.get(`${this.uri}/times/${id}`);
  }

  geTimesByOrderId(order_id) {
    return this.http.get(`${this.uri}/times/order/${order_id}`);
  }

  addTime(date, order_id, description, time, user_id) {
    const newTime = {
      date: date,
      order_id: order_id,
      description: description,
      time: time,
      user_id: user_id
    };
    return this.http.post(`${this.uri}/times`, newTime);
  }

   editTime(id, orderNumber, date, userId, description, time) {
    const updatedTime = {
      user: userId,
      date: date,
      order: orderNumber,
      description: description,
      time: time
    };
    return this.http.put(`${this.uri}/times/update/${id}`, updatedTime);
  }

  deleteTime(id) {
    return this.http.delete(`${this.uri}/times/delete/${id}`);
  }
}
