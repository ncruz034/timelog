import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { OrderService } from '../../../services/order.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Order } from '../../../models/order.model';
import {NgbDateAdapter, NgbDateStruct, NgbDateNativeAdapter} from '@ng-bootstrap/ng-bootstrap';

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
  latestOrder: Order;
  project_id: String;
  orderNumber: String;

  constructor(private route: ActivatedRoute, private orderService: OrderService, private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      'date': [this.order.date, Validators.required],
      'clientName': [this.order.clientName, Validators.required],
      'address': [this.order.address, Validators.required],
      'phoneNumber': [this.order.phoneNumber, Validators.required],
      'fieldWorkPromissed': [this.order.fieldWorkPromissed],
      'printsPromissed': [this.order.printsPromissed],
      'projectName': [this.order.projectName, Validators.required],
      'legalDescription': [this.order.legalDescription, Validators.required],
      'orderPlacedBy': [this.order.orderPlacedBy, Validators.required],
      'orderReceivedBy': [this.order.orderReceivedBy, Validators.required],
      'referToFileNumber': [this.order.referToFileNumber],
      'referToFieldBookNumber': [this.order.referToFieldBookNumber],
      'referToOrderNumber': [this.order.referToOrderNumber],
      'fieldBook' : [this.order.fieldBook],
      'page': [this.order.page],
      'section': [this.order.section],
      'township': [this.order.township],
      'range': [this.order.range],
      'partyChief': [this.order.partyChief],
      'dateCompleted': [this.order.dateCompleted],
      'mail': [this.order.mail],
      'deliver': [this.order.deliver],
      'pickup': [this.order.pickup],
      'mailPrintsTo': [this.order.mailPrintsTo],
      'deliverPrintsTo': [this.order.deliverPrintsTo],
      'printsAtTime': [this.order.printsAtTime],
      'dateInvoice': [this.order.dateInvoice],
      'amountSetBy': [this.order.amountSetBy],
      'invoiceTypedBy': [this.order.invoiceTypedBy],
      'courierFees': [this.order.courierFees],
      'applPermitFees': [this.order.applPermitFees],
      'isCOD': [this.order.isCOD],
      'orderNumber': [this.order.orderNumber, Validators.required],
      'fileNumber': [this.order.fileNumber],
      'price': [this.order.price],
    });
  }

  addOrder() {

    if (!this.form.valid) {
      this.form.setErrors({invalidAddOrder: true });
    } else {
        // Save new Order
        this.order = this.form.value;
        this.orderService.addOrder(this.order).subscribe((order_id: any) => {});
        this.router.navigate([`orders/`]);
      }
    }


  ngOnInit() {

    this.route.params.subscribe( params => {
      this.project_id = params.project_id;
      this.form.get('projectName').setValue(params.projectName);
      this.form.get('clientName').setValue(params.clientName);
  });


  this.orderService.getLatestOrder().subscribe((order: Order) => {
    // console.log('Latest order number: ' + order[0].orderNumber);
    this.orderNumber = (parseInt(order[0].orderNumber, 0) + 1).toString();

    this.form.get('orderNumber').setValue(this.orderNumber);

  });
  }
}
