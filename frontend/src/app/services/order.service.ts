import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { NG_PROJECT_AS_ATTR_NAME } from '@angular/core/src/render3/interfaces/projection';
import { Order } from '../models/order.model';
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

  getLatestOrder() {
    // console.log('In order services Latest');
    return this.http.get(`${this.uri}/orders/latest/-1`);
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

  addOrder( newOrder: Order){
    return this.http.post(`${this.uri}/orders`, newOrder);
  }

  deleteTime(_id, time_id) {
    return this.http.delete(`${this.uri}/orders/${_id}/time/${time_id}`);
  }

  editOrder(_id, updatedOrder) {
    return this.http.put(`${this.uri}/orders/${_id}`, updatedOrder);
  }

  deleteOrder(_id) {
    return this.http.delete(`${this.uri}/orders/delete/${_id}`);
  }
}
