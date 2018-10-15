import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { OrderService } from '../../../services/order.service';
import { Router, ActivatedRoute } from '@angular/router';
import {MatSnackBar } from '@angular/material';
import { Order } from '../../../models/order.model';

export interface Billed {
  value: string;
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

  editForm: FormGroup;
  id: '';
  orderNumber: '';
  order: any = {};

  billed: Billed[] = [
    {value: 'true', viewValue: 'Yes'},
    {value: 'false', viewValue: 'No'},

  ];

  statusOptions: Status[] = [
    {value: 'In Progress', viewValue: 'In Progress'},
    {value: 'Finished', viewValue: 'Finished'},
    {value: 'Hold', viewValue: 'Hold'},

  ];
  constructor(private orderService: OrderService, private fb: FormBuilder,
              private router: Router, private route: ActivatedRoute, private snackBar: MatSnackBar) {

    this.createForm();
    }
    createForm() {
      this.editForm = this.fb.group({
        client: ['', Validators.required],
        project: ['', Validators.required],
        description: ['', Validators.required],
        isBilled: ['', Validators.required],
        status: ['', Validators.required],
      });
  }

    editOrder(client, project, description, isBilled, status) {
        const order = {
          orderNumber: this.order.orderNumber,
          date: this.order.date,
          client: client,
          project: project,
          description: description,
          isBilled: isBilled,
          status: status,
        };

      console.log('The client: ' + client);
      this.orderService.editOrder(this.id, order).subscribe(() => {
        this.snackBar.open('Order updated succesfully', 'OK', {
          duration: 3000
        });
        this.router.navigate(['/orders']);
      });
    }

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log('The id: ' + params.id);
      this.id = params.id;


      this.orderService.getOrderById(this.id).subscribe(res => {
        this.order = res;
        this.editForm.get('client').setValue(this.order.client);
        this.editForm.get('project').setValue(this.order.project);
        this.editForm.get('description').setValue(this.order.description);
        this.editForm.get('isBilled').setValue(this.order.isBilled);
        this.editForm.get('status').setValue(this.order.status);
      });
    });
  }


}
