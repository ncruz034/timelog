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

  addTime(date, order_id, orderNumber, projectName, clientName, description, time, userName, user_id) {
    const newTime = {
      date: date,
      order_id: order_id,
      orderNumber: orderNumber,
      projectName: projectName,
      clientName: clientName,
      description: description,
      time: time,
      userName: userName,
      user_id: user_id
    };
    return this.http.post(`${this.uri}/times`, newTime);
  }

   editTime(id, updatedTime) {

    return this.http.put(`${this.uri}/times/update/${id}`, updatedTime);
  }

  deleteTime(id) {
    return this.http.delete(`${this.uri}/times/delete/${id}`);
  }
}
