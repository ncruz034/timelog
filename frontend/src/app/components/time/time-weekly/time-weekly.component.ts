import { Component, OnInit } from '@angular/core';
import { TimeService } from '../../../services/time.service';
import { OrderService } from '../../../services/order.service';
import { Router } from '@angular/router';
import { Time } from '../../../models/time.model';
import { Order } from '../../../models/order.model';


@Component({
  selector: 'app-time-weekly',
  templateUrl: './time-weekly.component.html',
  styleUrls: ['./time-weekly.component.css']
})
export class TimeWeeklyComponent implements OnInit {

  userTimes:Time;

  constructor(private timeService: TimeService) { }

  ngOnInit() {
    console.log("Getting user weekly time =====================")
    this.getUsersWeeklyTime(localStorage.getItem('user_id'))
  }

  getUsersWeeklyTime(user_id) {
    console.log("In weekly function");
    this.timeService.getUsersWeeklyTime(user_id).subscribe(
      (data: any) => {
        this.userTimes = data.times;
        console.log(this.userTimes);

      });
    }
}
