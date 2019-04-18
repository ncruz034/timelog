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

  displayedColumns = ['orderNumber', 'date', 'description', 'time', 'actions'];

  constructor(private orderService: OrderService, private timeService: TimeService, private router: Router) { }

  ngOnInit() {
      this.getUsersTime(localStorage.getItem('user_id'));
  }

  getTimesByOrderId() {
    this.timeService.geTimesByOrderId(this.currentOrderId).subscribe((data: Time[]) => {
      this.times = data;
    });
  }

  getUsersTime(user_id) {
    this.timeService.getUsersTime(user_id).subscribe(
      (data: Time[]) => {
        this.userTimes = data;
        console.log('Data requested.....................................');
        console.log(this.userTimes);
      });
  }

  editTime(id) {
    this.router.navigate([`times/edit/${id}`]);
  }

  deleteTime(order_id, id) {
    this.timeService.deleteTime(id).subscribe(() => {
     this.getUsersTime(id);
    });
    this.orderService.deleteTime(order_id, id).subscribe((time) => {
     console.log('Order Updated' + time);
    });
  }
}
