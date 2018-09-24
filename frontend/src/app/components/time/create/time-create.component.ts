import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { TimeService } from '../../../services/time.service';
import { OrderService } from '../../../services/order.service';
import { UserService } from '../../../services/user.service';
import { Router } from '@angular/router';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { Order } from '../../../models/order.model';
import { User } from '../../../models/user.model';

@Component({
  selector: 'app-create',
  templateUrl: './time-create.component.html',
  styleUrls: ['./time-create.component.css']
})
export class TimeCreateComponent implements OnInit {
  //myControl = new FormControl();
 // clients: string[]=[];// = this.fetchProjects();//['One', 'Two', 'Three'];
  //orderNumber: string[]=[];
 // filteredClients: Observable<string[]>;
  createForm: FormGroup;
  orders: Order[] = null;
  user_id;

  constructor(private userService: UserService, private timeService: TimeService, private fb: FormBuilder, private router: Router) {

    this.createForm = this.fb.group({
      date: [new Date(), Validators.required],
      order_id: ['', Validators.required],
      description: ['', Validators.required],
      time: [0, Validators.required],
    });
    }


    addTime(date, orderNumber, description, time) {
      console.log(date);
      this.timeService.addTime(date, orderNumber, description, time, localStorage.getItem('user_id')).subscribe(() => {
        this.userService.addUserTime(localStorage.getItem('user_id',));
        this.router.navigate(['/times']);
      });
    }

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




  ngOnInit() {
    this.user_id = localStorage.getItem('user_id');
    /*
    this.fetchProjects().then(()=>{
      this.filteredClients = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
    });
    */
  }
}
