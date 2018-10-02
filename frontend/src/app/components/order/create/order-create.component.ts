import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { OrderService } from '../../../services/order.service';
import { Router } from '@angular/router';
import { Order } from '../../../models/order.model';

@Component({
  selector: 'app-order-create',
  templateUrl: './order-create.component.html',
  styleUrls: ['./order-create.component.css']
})


export class OrderCreateComponent implements OnInit {
  createForm: FormGroup;
  order: Order = new Order();

  constructor(private orderService: OrderService, private fb:FormBuilder, private router:Router) {}

  addOrder(){
    this.orderService.addOrder(
      this.createForm.value.orderNumber, this.createForm.value.date, this.createForm.value.description, this.createForm.value.client,
      this.createForm.value.project,this.createForm.value.isBilled, this.createForm.value.status)
       .subscribe((order_id: any) => {
          console.log('this is the time _id ' + order_id);
      });
    }

  //  addTime(date,order,name,last,description,time){
 
     // this.orderService.addOrder(date,order,name,last,description,time).subscribe(()=>{
      //  this.router.navigate(['/list']);
     // });
   // }

  ngOnInit() {
    this.createForm = this.fb.group({
      orderNumber:[this.order.orderNumber,Validators.required],
      date:[this.order.date,Validators.required],
      client:[this.order.client,Validators.required],
      project: [this.order.project,Validators.required],
      description: [this.order.description,Validators.required],
      isBilled: [this.order.isBilled,Validators.required],
      status:[this.order.status,Validators.required]
    });
  }
}
