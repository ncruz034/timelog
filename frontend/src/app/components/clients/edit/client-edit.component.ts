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
  editForm: FormGroup;
  id: '';
  client: any = {};
  constructor(private route: ActivatedRoute, private clientService: ClientService,
    private fb: FormBuilder, private router: Router) {

      this.editForm = this.fb.group({
        clientName: ['', Validators.required],
        date: ['', Validators.required],
        address: ['', Validators.required],
        phone: ['', Validators.required],
        contact: ['', Validators.required],
      });
     }

     editClient(date, address, phone, contact) {
      const updatedClient = {
        clientName: this.editForm.value.clientName,
        date: this.editForm.value.date,
        address: this.editForm.value.address,
        phone: this.editForm.value.phone,
        contact: this.editForm.value.contact,
      };

     this.clientService.editClient(this.id, updatedClient).subscribe(() => {
      // this.snackBar.open('Time updated succesfully', 'OK', {
      //   duration: 3000
      // });
       this.router.navigate(['/times']);
     });
   }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.clientService.getClientById(this.id).subscribe(res => {
        this.client = res;
        this.editForm.get('clientName').setValue(this.client.clientName);
        this.editForm.get('date').setValue(this.client.date);
        this.editForm.get('address').setValue(this.client.address);
        this.editForm.get('phone').setValue(this.client.phone);
        this.editForm.get('contact').setValue(this.client.contact);
      });
    });
  }

}
