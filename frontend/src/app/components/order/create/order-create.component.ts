import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { OrderService } from '../../../services/order.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Order } from '../../../models/order.model';
import {NgbDateAdapter, NgbDateStruct, NgbDateNativeAdapter} from '@ng-bootstrap/ng-bootstrap';
/* export interface Billed {
  value: string;
  viewValue: string;
} */

export interface Status {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-order-create',
  templateUrl: './order-create.component.html',
  styleUrls: ['./order-create.component.css'],
  providers: [{provide: NgbDateAdapter, useClass: NgbDateNativeAdapter}]
})


export class OrderCreateComponent implements OnInit {
  form: FormGroup;
  order: Order = new Order();
  project_id: String;

  //@Input() public PROJECTNAME;

  /* billed: Billed[] = [
    {value: 'true', viewValue: 'Yes'},
    {value: 'false', viewValue: 'No'},

  ]; */

  statusOptions: Status[] = [
    {value: 'In Progress', viewValue: 'In Progress'},
    {value: 'Finished', viewValue: 'Finished'},
    {value: 'Hold', viewValue: 'Hold'},
  ];
  constructor(private route: ActivatedRoute, private orderService: OrderService, private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      'orderNumber': [this.order.orderNumber, Validators.required],
      'clientName': [this.order.clientName, Validators.required],
      'projectName': [this.order.projectName, Validators.required],
      'date': [this.order.date, Validators.required],
      'description': [this.order.description, Validators.required],
    /*   'isBilled': [this.order.isBilled, Validators.required],
      'status': [ this.order.status, Validators.required] */
    });
  }

  addOrder() {
      this.orderService.addOrder(
      this.form.value.orderNumber, this.form.value.clientName,
      this.form.value.projectName, this.form.value.date,
      this.form.value.description, false, 'In Progress')
       .subscribe((order_id: any) => {
          console.log('this is the order _id ' + order_id);
      });
    }

  ngOnInit() {
    this.route.params.subscribe( params => {
      this.project_id = params.project_id;
      this.form.get('projectName').setValue(params.projectName);
      this.form.get('clientName').setValue(params.clientName);
  });
  }
}
