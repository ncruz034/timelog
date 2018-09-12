import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { OrderService } from '../../../services/order.service';
import { Router, ActivatedRoute } from '@angular/router';
import {MatSnackBar } from '@angular/material';
import { Order } from '../../../models/order.model';

@Component({
  selector: 'app-order-edit',
  templateUrl: './order-edit.component.html',
  styleUrls: ['./order-edit.component.css']
})
export class OrderEditComponent implements OnInit {

  editForm: FormGroup;
  id: String;
  order: any = {};

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

    editOrder(date, client, project, description, isBilled, status) {
      this.orderService.editOrder(this.id, date, client, project, description,isBilled,status).subscribe(()=>{
        this.snackBar.open('Order updated succesfully', 'OK', {
          duration: 3000
        });
        this.router.navigate(['/times']);
      });
    }

  ngOnInit() {
    this.route.params.subscribe(params =>{
      this.id = params.id;
      this.orderService.getOrderById(this.id).subscribe(res =>{
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
