import { Component, OnInit } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { ClientService } from '../../../services/client.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Client } from 'src/app/models/client.model';

@Component({
  selector: 'app-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.css']
})
export class ClientDetailComponent implements OnInit {

  client: Client;
  id: '';


  constructor(private route: ActivatedRoute,
              private clientService: ClientService,
              http: HttpClient, router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
      //console.log(this.id);
      this.clientService.getClientById(this.id)
      .subscribe(
        (client: Client) => {
          this.client = client;
         //console.log(this.client);
      });

      });
  }

}
