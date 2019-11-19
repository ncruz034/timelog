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
      'legalDescription': [this.order.legalDescription],
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
      'fileNumber': [this.order.fileNumber, Validators.required],
      'price': [this.order.price],
    });
  }

  addOrder() {
    this.order.date = this.form.value.date;
    this.order.clientName = this.form.value.clientName;
    this.order.address = this.form.value.address;
    this.order.phoneNumber = this.form.value.phoneNumber;
    this.order.fieldWorkPromissed = this.form.value.fieldWorkPromissed;
    this.order.printsPromissed = this.form.value.printsPromissed;
    this.order.projectName = this.form.value.projectName;
    this.order.legalDescription = this.form.value.legalDescription;
    this.order.orderPlacedBy = this.form.value.orderPlacedBy;
    this.order.orderReceivedBy = this.form.value.orderReceivedBy;
    this.order.referToFileNumber = this.form.value.referToFileNumber;
    this.order.referToFieldBookNumber = this.form.value.referToFieldBookNumber;
    this.order.referToOrderNumber = this.form.value.referToOrderNumber;
    this.order.fieldBook = this.form.value.fieldBook;
    this.order.page = this.form.value.page;
    this.order.section = this.form.value.section;
    this.order.township = this.form.value.township;
    this.order.range = this.form.value.range;
    this.order.partyChief = this.form.value.partyChief;
    this.order.dateCompleted = this.form.value.dateCompleted;
    this.order.mail = this.form.value.mail;
    this.order.deliver = this.form.value.deliver;
    this.order.pickup = this.form.value.pickup;
    this.order.mailPrintsTo = this.form.value.mailPrintsTo;
    this.order.deliverPrintsTo = this.form.value.deliverPrintsTo;
    this.order.printsAtTime = this.form.value.printsAtTime;
    this.order.dateInvoice = this.form.value.dateInvoice;
    this.order.amountSetBy = this.form.value.amountSetBy;
    this.order.invoiceTypedBy = this.form.value.invoiceTypedBy;
    this.order.courierFees = this.form.value.courierFees;
    this.order.applPermitFees = this.form.value.applPermitFees;
    this.order.isCOD = this.form.value.isCOD;
    this.order.orderNumber = this.form.value.orderNumber;
    this.order.fileNumber = this.form.value.fileNumber;
    this.order.price = this.form.value.price;

    // Save new Order
    this.orderService.addOrder(this.order) .subscribe((order_id: any) => {
      // console.log('this is the order _id ' + order_id);
    });
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
