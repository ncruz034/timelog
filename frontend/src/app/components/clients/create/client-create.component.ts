import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ClientService } from '../../../services/client.service';
import { Router } from '@angular/router';
import { Client } from '../../../models/client.model';
import {NgbDateAdapter, NgbDateStruct, NgbDateNativeAdapter} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-create',
  templateUrl: './client-create.component.html',
  styleUrls: ['./client-create.component.css'],
  providers: [{provide: NgbDateAdapter, useClass: NgbDateNativeAdapter}]
})
export class ClientCreateComponent {

  /* form = new FormGroup({
    clientName: new FormControl('',[Validators.required]),
    date: new FormControl('',[Validators.required]),
    address: new FormControl('',[Validators.required]),
    phone: new FormControl('',[Validators.required]),
    contact: new FormControl('',[Validators.required])
  }) */

  get clientName(){ return this.form.get('clientName');}

form: FormGroup;
client: Client = new Client();
  constructor(private clientService: ClientService, private fb: FormBuilder, private router: Router) { }

   ngOnInit() {
    this.form = this.fb.group({
      clientName: [this.client.clientName, Validators.required],
      date: [this.client.date, Validators.required],
      address: [this.client.address, Validators.required],
      phone: [this.client.phone, Validators.required],
      contact: [this.client.contact, Validators.required]
    });
  }

  addClient() {
    console.log(this.form.value.date);
      this.clientService.addClient(
        this.form.value.clientName, this.form.value.date, this.form.value.address,
        this.form.value.phone, this.form.value.contact)
         .subscribe((order_id: any) => {
            console.log('this is the order_id ' + order_id);
        });
      }
  }

