import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { OrderService } from '../../../services/order.service';
import { Router, ActivatedRoute } from '@angular/router';
//import {MatSnackBar } from '@angular/material';
import { Order } from '../../../models/order.model';

export interface Billed {
  value: boolean;
  viewValue: string;
}

export interface Status {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-order-edit',
  templateUrl: './order-edit.component.html',
  styleUrls: ['./order-edit.component.css']
})
export class OrderEditComponent implements OnInit {

  form: FormGroup;
  id: '';
  orderNumber: '';
  order: any = {};
  selectedStatus: String;
  selectedBilled: Boolean;

  billed: Billed[] = [
    {value: true, viewValue: 'yes'},
    {value: false, viewValue: 'No'},

  ];

  statusOptions: Status[] = [
    {value: 'In Progress', viewValue: 'In Progress'},
    {value: 'Finished', viewValue: 'Finished'},
    {value: 'Hold', viewValue: 'Hold'},

  ];
  constructor(private orderService: OrderService, private fb: FormBuilder,

              private router: Router, private route: ActivatedRoute) {
                this.form = this.fb.group({
                  clientName: ['', Validators.required],
                  projectName: ['', Validators.required],
                  description: ['', Validators.required],
                  isBilled: ['', Validators.required],
                 // isBilled: [Boolean, Validators.required],
                  status: ['', Validators.required],
                });
    //this.createForm();
    }
   /*  createForm() {
      this.form = this.fb.group({
        clientName: ['', Validators.required],
        projectName: ['', Validators.required],
        description: ['', Validators.required],
        isBilled: [Boolean, Validators.required],
       // isBilled: [Boolean, Validators.required],
        status: ['', Validators.required],
      });
  } */

    editOrder() {
        const order = {
          orderNumber: this.order.orderNumber,
          date: this.order.date,
          clientName: this.form.value.clientName,
          projectName: this.form.value.projectName,
          description: this.form.value.description,
          isBilled: this.selectedBilled,  //TODO
          status: this.selectedStatus,
        };

      this.orderService.editOrder(this.id, order).subscribe(() => {
        /* this.snackBar.open('Order updated succesfully', 'OK', {
          duration: 3000
        }); */
        this.router.navigate(['/orders']);
      });
    }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;

      this.orderService.getOrderById(this.id).subscribe(res => {
        this.order = res;
        console.log("The order number is: " + this.order.projectName);
        this.form.get('clientName').setValue(this.order.clientName);
        this.form.get('projectName').setValue(this.order.projectName);
        this.form.get('description').setValue(this.order.description);
        this.form.get('isBilled').setValue(this.order.isBilled);
        this.form.get('status').setValue(this.order.status);
        this.selectedBilled = this.order.isBilled;
        this.selectedStatus = this. order.status;
      });
    });
  }

}
