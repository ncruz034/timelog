import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { OrderService } from '../../../services/order.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-order-create',
  templateUrl: './order-create.component.html',
  styleUrls: ['./order-create.component.css']
})


export class OrderCreateComponent implements OnInit {
  createForm: FormGroup;
  constructor(private orderService: OrderService, private fb:FormBuilder, private router:Router) {
    
    this.createForm = this.fb.group({
      date:['',Validators.required],
      client:['',Validators.required],
      project: ['',Validators.required],
      description: ['',Validators.required],
      isBilled: [false,Validators.required],
      status:['',Validators.required]
    });
    }

    addTime(date,order,name,last,description,time){
 
      this.orderService.addOrder(date,order,name,last,description,time).subscribe(()=>{
        this.router.navigate(['/list']);
      });
    }

  ngOnInit() {
  }
}
