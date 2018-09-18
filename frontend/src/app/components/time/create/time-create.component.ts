import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators, FormControl } from '@angular/forms';
import { TimeService } from '../../../services/time.service';
import { OrderService } from '../../../services/order.service';
import { Router } from '@angular/router';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { Order } from '../../../models/order.model';
//import { MatTableDataSource } from '@angular/material';
//import { Currency } from '../../../currency.model';
@Component({
  selector: 'app-create',
  templateUrl: './time-create.component.html',
  styleUrls: ['./time-create.component.css']
})
export class TimeCreateComponent implements OnInit {
  myControl = new FormControl();
  options: string[] = [''];//['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;
  createForm: FormGroup;
  orders: Order[]=null;
  constructor(private orderService:OrderService, private timeService: TimeService, private fb:FormBuilder, private router:Router) {
    
    this.createForm = this.fb.group({
      date: [new Date(), Validators.required],
      order:['',Validators.required],
      name: ['',Validators.required],
      last: ['',Validators.required],
      description: ['',Validators.required],
      time:0,
    });
    }

    private _filter(value: string): string[] {
      const filterValue = value.toLowerCase();
     

      return this.options.filter(option => option.toLowerCase().includes(filterValue));
    }

    addTime(date,order,name,last,description,time){
 
      this.timeService.addTime(date,order,name,last,description,time).subscribe(()=>{
        this.router.navigate(['/times']);
      });
    }

    fetchOrders(){
      this.orderService.getOrders().subscribe(
        (data: Order[])=>{
          this.orders = data
          let order;
          this.orders.forEach(function(order){
            this.options = order.cient;
          });
          //console.log('Data requested...');
          //console.log(this.orders);
        },
        err => {
          if(err instanceof HttpErrorResponse){
              if(err.status === 401){
                this.router.navigate(['/auth']);
              }
          }
        }
      );
    }
  ngOnInit() {
    this.fetchOrders();
    this.filteredOptions = this.myControl.valueChanges
    .pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

}
