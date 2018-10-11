import { Component, OnInit, Input } from '@angular/core';
import { TimeService } from '../../../services/time.service';
import { Router } from '@angular/router';
import { Time } from '../../../models/time.model';
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
  displayedColumns = ['orderNumber', 'date', 'description', 'time', 'actions'];

  constructor(private timeService: TimeService, private router: Router) { }

  ngOnInit() {
   // if (this.currentOrderId) {
   //   this.getTimesByOrderId();
    //} else {
      this.getUsersTime(localStorage.getItem('user_id'));
   // }
  }

  getTimesByOrderId() {
    this.timeService.geTimesByOrderId(this.currentOrderId).subscribe((data: Time[]) => {
      this.times = data;
    });
  }

  getUsersTime(user_id) {
    this.timeService.getUsersTime(user_id).subscribe(
      (data: Time[]) => {
        this.times = data;
        console.log('Data requested...');
        console.log(this.times);
      });
  }

  editTime(id) {
    this.router.navigate([`times/edit/${id}`]);
  }

  deleteTime(id) {
    this.timeService.deleteTime(id).subscribe(() => {
      this.getUsersTime(id);
    });
  }
}
