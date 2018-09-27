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
import { Time } from '../../../models/time.model';
//import { MomentModule } from 'ngx-moment';

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
 time: Time = new Time();

  createForm: FormGroup;
  orders: Order[] = null;
  user_id;


  constructor(private userService: UserService, private timeService: TimeService, private fb: FormBuilder, private router: Router) {
   /*
    this.createForm = this.fb.group({
      dateOfWork: [new Date, Validators.required],
      orderNumber: ['', Validators.required],
      description: ['', Validators.required],
      time: [0, Validators.required],
    });
*/
    }

    addTime() {

      this.timeService.addTime(this.createForm.value.date.toDateString(),
                               this.createForm.value.orderNumber,
                               this.createForm.value.description, this.createForm.value.time,
                               localStorage.getItem('user_id')).subscribe((data: any) => {
        this.userService.addTimeToUser(localStorage.getItem('user_id'), data._id);
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

    this.createForm = this.fb.group({
      'date': [this.time.date, Validators.required],
      'orderNumber': [this.time.orderNumber, Validators.required],
      'description': [this.time.description, Validators.required],
      'time': [this.time.time, Validators.required],
    });

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
