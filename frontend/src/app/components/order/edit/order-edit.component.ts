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
  isCOD = 'COD';

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
                  'COD': [this.order.COD],
                  'noCOD': [this.order.noCOD],
                  'orderNumber': [this.order.orderNumber, Validators.required],
                  'fileNumber': [this.order.fileNumber, Validators.required],
                  'price': [this.order.price],
                });

    }

    editOrder() {
        const order = {
          /*
          orderNumber: this.order.orderNumber,
          date: this.order.date,
          clientName: this.form.value.clientName,
          projectName: this.form.value.projectName,
          legalDescription: this.form.value.legalDescription,
          isBilled: this.selectedBilled,
          status: this.selectedStatus,
          */

      date: this.order.date,
      clientName: this.order.clientName,
      address: this.order.address,
      phoneNumber: this.order.phoneNumber,
      fieldWorkPromissed: this.order.fieldWorkPromissed,
      printsPromissed: this.order.printsPromissed,
      projectName: this.order.projectName,
      legalDescription: this.order.legalDescription,
      orderPlacedBy: this.order.orderPlacedBy,
      orderReceivedBy: this.order.orderReceivedBy,
      referToFileNumber: this.order.referToFieldBookNumber,
      referToFieldBookNumber: this.order.referToFieldBookNumber,
      referToOrderNumber: this.order.referToOrderNumber,
      fieldBook: this.order.fieldBook,
      page: this.order.page,
      section: this.order.section,
      township: this.order.township,
      range: this.order.range,
      partyChief: this.order.partyChief,
      dateCompleted: this.order.dateCompleted,
      mail: this.order.mail,
      deliver: this.order.deliver,
      pickup: this.order.pickup,
      mailPrintsTo: this.order.mailPrintsTo,
      deliverPrintsTo: this.order.deliverPrintsTo,
      printsAtTime: this.order.printsAtTime,
      dateInvoice: this.order.dateInvoice,
      amountSetBy: this.order.amountSetBy,
      invoiceTypedBy: this.order.invoiceTypedBy,
      courierFees: this.order.courierFees,
      applPermitFees: this.order.applPermitFees,
      COD: this.order.value.COD,
      noCOD: this.order.value.noCOD,
      orderNumber: this.order.orderNumber,
      fileNumber: this.order.fileNumber,
      price: this.order.price
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
        /*
        this.form.get('clientName').setValue(this.order.clientName);
        this.form.get('projectName').setValue(this.order.projectName);
        this.form.get('description').setValue(this.order.description);
        this.form.get('isBilled').setValue(this.order.isBilled);
        this.form.get('status').setValue(this.order.status);
        this.selectedBilled = this.order.isBilled;
        this.selectedStatus = this. order.status;
        */

      this.form.get('date').setValue(this.order.date);
      this.form.get('clientName').setValue(this.order.clientName);
      this.form.get('address').setValue(this.order.address);
      this.form.get('phoneNumber').setValue(this.order.phoneNumber);
      this.form.get('fieldWorkPromissed').setValue(this.order.fieldWorkPromissed);
      this.form.get('printsPromissed').setValue(this.order.printsPromissed);
      this.form.get('projectName').setValue(this.order.projectName);
      this.form.get('legalDescription').setValue(this.order.legalDescription);
      this.form.get('orderPlacedBy').setValue(this.order.orderPlacedBy);
      this.form.get('orderReceivedBy').setValue(this.order.orderReceivedBy);
      this.form.get('referToFileNumber').setValue(this.order.referToFieldBookNumber);
      this.form.get('referToFieldBookNumber').setValue(this.order.referToFieldBookNumber);
      this.form.get('referToOrderNumber').setValue(this.order.referToOrderNumber);
      this.form.get('fieldBook').setValue(this.order.fieldBook);
      this.form.get('page').setValue(this.order.page);
      this.form.get('section').setValue(this.order.section);
      this.form.get('township').setValue(this.order.township);
      this.form.get('range').setValue(this.order.range);
      this.form.get('partyChief').setValue(this.order.partyChief);
      this.form.get('dateCompleted').setValue(this.order.dateCompleted);
      this.form.get('mail').setValue(this.order.mail);
      this.form.get('deliver').setValue(this.order.deliver);
      this.form.get('pickup').setValue(this.order.pickup);
      this.form.get('mailPrintsTo').setValue(this.order.mailPrintsTo);
      this.form.get('deliverPrintsTo').setValue(this.order.deliverPrintsTo);
      this.form.get('printsAtTime').setValue(this.order.printsAtTime);
      this.form.get('dateInvoice').setValue(this.order.dateInvoice);
      this.form.get('amountSetBy').setValue(this.order.amountSetBy);
      this.form.get('invoiceTypedBy').setValue(this.order.invoiceTypedBy);
      this.form.get('courierFees').setValue(this.order.courierFees);
      this.form.get('applPermitFees').setValue(this.order.applPermitFees);
      this.form.get('COD').setValue(this.order.COD);
      this.form.get('noCOD').setValue(this.order.noCOD);
      this.form.get('orderNumber').setValue(this.order.orderNumber);
      this.form.get('fileNumber').setValue(this.order.fileNumber);
      this.form.get('price').setValue(this.order.price);
      });
    });
  }

}
