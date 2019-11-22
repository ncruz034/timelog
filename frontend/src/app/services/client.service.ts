import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  uri = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }


  addClient(newClient) {
    return this.http.post(`${this.uri}/clients`, newClient);
  }

  getClients() {
    return this.http.get(`${this.uri}/clients`);
  }

  getClientById(id) {
    return this.http.get(`${this.uri}/clients/${id}`);
  }


  editClient(_id, updatedClient) {
    return this.http.put(`${this.uri}/clients/${_id}`, updatedClient);
  }

  deleteClient(_id) {
    return this.http.delete(`${this.uri}/clients/delete/${_id}`);
  }
}
