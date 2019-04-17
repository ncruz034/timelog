import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ClientService } from '../../../services/client.service';
import { Router, ActivatedRoute } from '@angular/router';
//import {MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-edit',
  templateUrl: './client-edit.component.html',
  styleUrls: ['./client-edit.component.css']
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

     editClient(date, address, phone, contact) {
      const updatedClient = {
        clientName: this.form.value.clientName,
        date: this.form.value.date,
        address: this.form.value.address,
        phone: this.form.value.phone,
        contact: this.form.value.contact,
      };

     this.clientService.editClient(this.id, updatedClient).subscribe(() => {
      // this.snackBar.open('Time updated succesfully', 'OK', {
      //   duration: 3000
      // });
       this.router.navigate(['/clients']);
     });
   }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.clientService.getClientById(this.id).subscribe(res => {
        this.client = res;
        this.form.get('clientName').setValue(this.client.clientName);
        this.form.get('date').setValue(this.client.date);
        this.form.get('address').setValue(this.client.address);
        this.form.get('phone').setValue(this.client.phone);
        this.form.get('contact').setValue(this.client.contact);
      });
    });
  }

}
