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
      'referToFileNumber':[this.order.referToFileNumber],
      'referToFieldBookNumber':[this.order.referToFieldBookNumber],
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
      'cod': [this.order.cod],
      'noCod': [this.order.noCod],
      'orderNumber': [this.order.orderNumber, Validators.required],
      'fileNumber': [this.order.fileNumber, Validators.required],
      'price': [this.order.price],

    /*   'isBilled': [this.order.isBilled, Validators.required],
      'status': [ this.order.status, Validators.required] */
    });
  }

  addOrder() {
      this.orderService.addOrder(
        this.form.value.date,
        this.form.value.clientName,
        this.form.value.address,
        this.form.value.phoneNumber,
        this.form.value.fieldWorkPromissed,
        this.form.value.printsPromissed,
        this.form.value.projectName,
        this.form.value.legalDescription,
        this.form.value.orderPlacedBy,
        this.form.value.orderReceivedBy,
        this.form.value.referToFileNumber,
        this.form.value.referToFieldBookNumber,
        this.form.value.referToOrderNumber,
        this.form.value.fieldBook,
        this.form.value.page,
        this.form.value.section,
        this.form.value.township,
        this.form.value.range,
        this.form.value.partyChief,
        this.form.value.dateCompleted,
        this.form.value.mail,
        this.form.value.deliver,
        this.form.value.pickup,
        this.form.value.mailPrintsTo,
        this.form.value.deliverPrintsTo,
        this.form.value.printsAtTime,
        this.form.value.dateInvoice,
        this.form.value.amountSetBy,
        this.form.value.invoiceTypedBy,
        this.form.value.courierFees,
        this.form.value.applPermitFees,
        this.form.value.cod,
        this.form.value.noCod,
        this.form.value.orderNumber,
        this.form.value.fileNumber,
        this.form.value.price,

/*
      this.form.value.orderNumber,
      this.form.value.clientName,
      this.form.value.projectName,
      this.form.value.date,
      this.form.value.description,
      false, 'In Progress'
      */

      )
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
