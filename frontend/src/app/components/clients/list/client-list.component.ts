import { Component, OnInit} from '@angular/core';
import { ClientService } from '../../../services/client.service';
import { Router } from '@angular/router';
import { Client } from '../../../models/client.model';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css'],
})
export class ClientListComponent implements OnInit {
  panelOpenState = false;

  clients: Client[]; 
  filteredClients: Client[];
  private _searchTerm: string;

  constructor(private clientService: ClientService, private router: Router) {}

  ngOnInit() {
    this.fetchClients();
  }

  get searchTerm(): string{
    return this._searchTerm;
  }

  set searchTerm(value: string){
    this._searchTerm = value;
    this.filteredClients = this.filtereClients(value);
  }

  filtereClients(searchString: string){
    return this.clients.filter(client => 
      client.clientName.toString().toLowerCase().indexOf(searchString.toLowerCase()) !== -1);
  }
  getOrderId(id) {
    //this.currentClientId = id;
  }
  

  fetchClients() {
    this.clientService.getClients().subscribe(
      (data: Client[]) => {
        this.clients = data;
        this.filteredClients = data;
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



