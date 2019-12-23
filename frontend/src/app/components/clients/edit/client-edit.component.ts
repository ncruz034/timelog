import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ClientService } from '../../../services/client.service';
import { Router, ActivatedRoute } from '@angular/router';
import {NgbDateAdapter, NgbDateStruct, NgbDateNativeAdapter} from '@ng-bootstrap/ng-bootstrap';
import {DatePipe } from '@angular/common';
//import {MatSnackBar } from '@angular/material';


@Component({
  selector: 'app-edit',
  templateUrl: './client-edit.component.html',
  styleUrls: ['./client-edit.component.css'],
  providers: [{provide: NgbDateAdapter, useClass: NgbDateNativeAdapter}, DatePipe]
})

export class ClientEditComponent implements OnInit {
  form: FormGroup;
  id: '';
  client: any = {};
  constructor(private route: ActivatedRoute, private clientService: ClientService,
    private fb: FormBuilder, private router: Router) {

      this.form = this.fb.group({
        clientName: ['', Validators.required],
        date: ['', Validators.required],
        address: ['', Validators.required],
        phone: ['', Validators.required],
        contact: ['', Validators.required],
      });
     }

     editClient() {
      if (!this.form.valid ) {
        this.form.setErrors({invalidAddTime: true });
      } else {
        this.clientService.editClient(this.id, this.form.value).subscribe(() => {});
        this.router.navigate(['/clients']);
      }
   }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.clientService.getClientById(this.id).subscribe(res => {
        this.client = res;
        this.form.get('clientName').setValue(this.client.clientName);
        this.form.get('date').setValue(new Date(this.client.date));
        this.form.get('address').setValue(this.client.address);
        this.form.get('phone').setValue(this.client.phone);
        this.form.get('contact').setValue(this.client.contact);
      });
    });
  }
}
