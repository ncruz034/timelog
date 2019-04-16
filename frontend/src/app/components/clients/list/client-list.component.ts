import { Component, OnInit, PipeTransform } from '@angular/core';
import { ClientService } from '../../../services/client.service';
import { Router } from '@angular/router';
import { Order } from '../../../models/order.model';
import { Client } from '../../../models/client.model';
import { HttpErrorResponse } from '@angular/common/http';
import { FormControl } from '@angular/forms';
import { DecimalPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { FilterPipe } from '../../../filter.pipe';

/* let clients: Client[]; 


function search(text: string, pipe: PipeTransform): Client[] {
  return clients.filter(client => {
    const term = text.toLowerCase();
    return client.clientName.toString().includes(term)
        || client.contact.toString().includes(term)
  });
} */ 

@Component({
  selector: 'app-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css'],
  providers: [DecimalPipe, FilterPipe]
})
export class ClientListComponent implements OnInit {

  // filter = new FormControl('');
  //clients$: Observable<Client[]>;
  clients: Client[]; 


  constructor(private pipe: DecimalPipe, private clientService: ClientService, private router: Router) {
   /*  this.clients$ = this.filter.valueChanges.pipe(
      startWith(''),
      map(text => search(text, this.pipe))
    ); */
   }

  ngOnInit() {
    this.fetchClients();
    //this.filterClients();
  }

 /*  filterClients(){
    this.clients$ = this.filter.valueChanges.pipe(
      startWith(''),
      map(text => search(text, this.pipe))
    );
  } */
  getOrderId(id) {
    //this.currentClientId = id;
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



