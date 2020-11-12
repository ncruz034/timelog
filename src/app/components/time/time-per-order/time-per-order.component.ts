import { Component, OnInit, Input } from '@angular/core';
import { TimeService } from '../../../services/time.service';
import { OrderService } from '../../../services/order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-time-per-order',
  templateUrl: './time-per-order.component.html',
  styleUrls: ['./time-per-order.component.css']
})
export class TimePerOrderComponent implements OnInit {
 timeByOrder: any[] = [];

  constructor(private orderService: OrderService, private timeService: TimeService, private router: Router) { }

  ngOnInit() {
     this.timeByOrder = this.timeService.getTimeByOrder();
      console.log(this.timeByOrder);
  }

  editTime(_id) {
    this.router.navigate([`times/edit/${_id}`]);
  }

  deleteTime(_id) {
    this.timeService.deleteTime(`${_id}`).subscribe(() => {
    // this.getUsersTime(localStorage.getItem('user_id'));
    });

   /*  this.orderService.deleteTime(order_id, id).subscribe((time) => {
     console.log('Order Updated' + time);
    }); */
  }

}
