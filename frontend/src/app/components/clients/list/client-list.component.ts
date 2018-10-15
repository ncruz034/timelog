import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../../services/client.service';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';
import { Order } from '../../../models/order.model';
import { Client } from '../../../models/client.model';
import { HttpErrorResponse } from '@angular/common/http';
import {MatGridListModule} from '@angular/material/grid-list';

@Component({
  selector: 'app-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {
  panelOpenState = false;
  clients: Client[];
  currentClientId: String;


  //displayedColumns = ['date', 'user', 'description', 'time'];
  constructor(private clientService: ClientService, private router: Router) { }

  ngOnInit() {
    this.fetchClients();
  }

  getOrderId(id) {
    this.currentClientId = id;
  }
  fetchClients() {
    this.clientService.getClients().subscribe(
      (data: Client[]) => {
        this.clients = data;
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

  editClient(id) {
    console.log('Edditing client id: ' + id);
    this.router.navigate([`clients/edit/${id}`]);
  }

  deleteOrder(id) {
    this.clientService.deleteClient(id).subscribe(() => {
      this.fetchClients();
    });
  }
}
