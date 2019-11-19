import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { TimeService } from '../../../services/time.service';
import { OrderService } from '../../../services/order.service';
import { UserService } from '../../../services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { Order } from '../../../models/order.model';
import { Time } from '../../../models/time.model';
import {NgbDateAdapter, NgbDateStruct, NgbDateNativeAdapter} from '@ng-bootstrap/ng-bootstrap';
//import { MomentModule } from 'ngx-moment';


@Component({
  selector: 'app-time-create',
  templateUrl: './time-create.component.html',
  styleUrls: ['./time-create.component.css'],
  providers: [{provide: NgbDateAdapter, useClass: NgbDateNativeAdapter}]
})
export class TimeCreateComponent implements OnInit{
 time: Time = new Time();
  form: FormGroup;
  orders: Order[] = null;
  user_id;
  order_id: String;
 isField: Boolean;

  constructor(private route: ActivatedRoute, private orderService: OrderService, private userService: UserService,
              private timeService: TimeService, private fb: FormBuilder, private router: Router) {

                this.form = this.fb.group({
                  'order_id': [this.time.order_id, Validators.required],
                  'date': [this.time.date, Validators.required],
                  'projectName': [this.time.projectName, Validators.required],
                  'clientName': [this.time.clientName, Validators.required],
                  'orderNumber': [this.time.orderNumber, Validators.required],
                  'description': [this.time.description, Validators.required],
                  'time': [this.time.time, Validators.required],
                  'overTime': [this.time.overTime, Validators.required],
                  'isField' : [this.time.isField],
                });
    }

    ngOnInit() {

      this.route.params.subscribe( params => {
          this.form.get('order_id').setValue(params.order_id);
          this.form.get('projectName').setValue(params.projectName);
          this.form.get('clientName').setValue(params.clientName);
          this.form.get('orderNumber').setValue(params.orderNumber);
      });
    }

    addTime() {
     // this.orderService.getOrderIdByOrderNumber(this.form.value.orderNumber).subscribe((order_id: any) => {
            // Add new time to time collection, return the new time _id.
            if(!this.form.value.isField){
              this.isField = true;
            }
            this.timeService.addTime(
                  this.form.value.date, this.form.value.orderNumber,
                  this.form.value.order_id, this.form.value.projectName,
                  this.form.value.clientName, this.form.value.description,
                  this.form.value.time,
                  this.form.value.overTime,
                  this.isField,
                  localStorage.getItem('user'),
                  localStorage.getItem('user_id')).subscribe((time_id: any) => {
                    this.router.navigate(['/times'])});
     // });
    }
  }
    // Gets the order _id by passing an orderNumber; then,
    // Adds new time to the time collection passing the order _id, and user _id; then,
    // Adds new time _id to the current user's document; then,
    // Adds new time _id to the selected order.

    /* addTime() {
      this.orderService.getOrderIdByOrderNumber(this.form.value.orderNumber).subscribe((order_id: any) => {
            // Add new time to time collection, return the new time _id.
            this.timeService.addTime(
                  this.form.value.date.toDateString(), order_id,
                  this.form.value.description, this.form.value.time,
                  localStorage.getItem('user_id')).subscribe((time_id: any) => {
                  console.log('this is the time _id ' + time_id);
                // Add time to user, return a user _id.
                this.userService.addTimeToUser(localStorage.getItem('user_id'), time_id)
                      .subscribe((user: any) => {
                      console.log('This is the user _id ' + user._id);
                                            });
                    // Add time to order, return a order _id.
                    this.orderService.addTimeToOrder(order_id, time_id)
                          .subscribe((order: any) => {
                          console.log('This is the order _id ' + order._id);
                                            });
                });
                this.router.navigate(['/times']);
      });


    } */

   /*
    private _filter(value: string): string[] {
        const filterValue = value.toLowerCase();
      return this.clients.filter(client => client.toLowerCase().includes(filterValue));
    }

     async fetchProjects(){
      this.orderService.getOrders().subscribe(
        (data: Order[])=>{
         for(let i = 0; i < data.length; i++){
            this.clients.push(Object.values(data[i])[3]);
           console.log(this.clients);
          // console.log(data);
         }},
        err => {
          if(err instanceof HttpErrorResponse){
              if(err.status === 401){
                this.router.navigate(['/auth']);
              }
          }
        }
      );
    }
    */




/*   ngOnInit() {

    this.route.params.subscribe( params => {

        //console.log("The params area: " + params.projectName );
        this.form.get('projectName').setValue(params.projectName);
        this.form.get('clientName').setValue(params.clientName);
        this.form.get('orderNumber').setValue(params.orderNumber);
    });
  } */

    //this.user_id = localStorage.getItem('user_id');

    /* this.form = this.fb.group({
      'date': [this.time.date, Validators.required],
      'projectName': [this.time.projectName, Validators.required],
      'clientName': [this.time.clientName, Validators.required],
      'orderNumber': [this.time.orderNumber, Validators.required],
      'description': [this.time.description, Validators.required],
      'time': [this.time.time, Validators.required],
    }); */

    /*
    this.fetchProjects().then(()=>{
      this.filteredClients = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
    });
    */


