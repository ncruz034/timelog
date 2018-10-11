import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  uri = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getOrders() {
    return this.http.get(`${this.uri}/orders`);
  }

  getOrderById(id) {
    return this.http.get(`${this.uri}/orders/${id}`);
  }

  getOrderIdByOrderNumber(order_number) {
    return this.http.get(`${this.uri}/orders/number/${order_number}`);
  }

  addTimeToOrder(order_id, time_id) {
    const updatedOrderTime = {
      time_id: time_id,
    };

    return this.http.post(`${this.uri}/orders/${order_id}/time`, updatedOrderTime);
  }

  addOrder(orderNumber, date, client, project, description, isBilled, status) {
    const newOrder = {
      orderNumber: orderNumber,
      date: date,
      client: client,
      project: project,
      description: description,
      isBilled: isBilled,
      status: status
    };
    return this.http.post(`${this.uri}/orders`, newOrder);
  }

  editOrder(_id, orderNumber, date, client, project, description, isBilled, status) {
    const updatedOrder = {
      orderNumber: orderNumber,
      date: date,
      client: client,
      project: project,
      description: description,
      isBilled: isBilled,
      status: status
    };
    console.log('Sendeing order Number: ' + orderNumber);
    return this.http.put(`${this.uri}/orders/${_id}`, updatedOrder);
  }

  deleteOrder(_id) {
    return this.http.delete(`${this.uri}/orders/delete/${_id}`);
  }
}
