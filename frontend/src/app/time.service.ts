import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TimeService {

  uri = 'http://localhost:3000/api';
  constructor(private http: HttpClient) { }

  getTimes(){
    return this.http.get(`${this.uri}/times`);
  }
  getTimeById(id){
    return this.http.get(`${this.uri}/times/${id}`);
  }
  addTime(date,order,name,last,time,description){
    const newTime = {
      date: date,
      order: order,
      name: name,
      last: last,
      description:description,
      time: time
     
    };
    return this.http.post(`${this.uri}/times/add`,newTime);
  }
  updateCurrency(id,date,order,name,last,time,description){
    const updatedTime = {
      date: date,
      order: order,
      name: name,
      last: last,
      description:description,
      time: time
    };
    return this.http.post(`${this.uri}/times/update${id}`,updatedTime);
  }

  deleteTime(id){
    return this.http.delete(`${this.uri}/times/delete/${id}`);
  }
}
