import { Component, OnInit, Input } from '@angular/core';
import { TimeService } from '../../../services/time.service';
import { OrderService } from '../../../services/order.service';
import { Router } from '@angular/router';
import { Time } from '../../../models/time.model';
import { Order } from '../../../models/order.model';
import { MomentModule } from 'ngx-moment';

@Component({
  selector: 'app-time-list',
  templateUrl: './time-list.component.html',
  styleUrls: ['./time-list.component.css']
})
export class TimeListComponent implements OnInit {
  @Input() currentOrderId: String;
  @Input() isOrderRequest: Boolean;
  times: Time[];
  userTimes: any[];

  displayedColumns = ['orderNumber', 'date', 'description', 'time', 'overTime', 'actions'];

  constructor(private orderService: OrderService, private timeService: TimeService, private router: Router) { }

  ngOnInit() {
    console.log("Initiating Time");
      this.getUsersTime(localStorage.getItem('user_id'));
  }

  getTimesByOrderId() {
    this.timeService.geTimesByOrderId(this.currentOrderId).subscribe((data: Time[]) => {
      this.times = data;
    });
  }

  getUsersTime(user_id) {
    this.timeService.getUsersTime(user_id).subscribe(
      (data: any) => {
        this.userTimes = data.times;
        console.log(this.userTimes);
      });
      /* (data: Time[]) => {
        this.userTimes = data;
        console.log(this.userTimes);
      }); */
  }

  editTime(_id) {
    this.router.navigate([`times/edit/${_id}`]);
  }

  deleteTime(_id) {
    console.log("The id is: " +` ${_id}`)
    this.timeService.deleteTime(`${_id}`).subscribe(() => {
     this.getUsersTime(localStorage.getItem('user_id'));
    });
   /*  this.orderService.deleteTime(order_id, id).subscribe((time) => {
     console.log('Order Updated' + time);
    }); */
  }
}
