import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ClientService } from '../../../services/client.service';
import { Router } from '@angular/router';
import { Client } from '../../../models/client.model';

@Component({
  selector: 'app-create',
  templateUrl: './client-create.component.html',
  styleUrls: ['./client-create.component.css']
})
export class ClientCreateComponent implements OnInit {
createForm: FormGroup;
client: Client = new Client();
  constructor(private clientService: ClientService, private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.createForm = this.fb.group({
      clientName: [this.client.clientName, Validators.required],
      date: [this.client.date, Validators.required],
      address: [this.client.address, Validators.required],
      phone: [this.client.phone, Validators.required],
      contact: [this.client.contact, Validators.required]
    });
  }
  
  addClient() {
      this.clientService.addClient(
        this.createForm.value.clientName, this.createForm.value.date, this.createForm.value.address,
        this.createForm.value.phone, this.createForm.value.contact)
         .subscribe((order_id: any) => {
            console.log('this is the time _id ' + order_id);
        });
      }
  }

