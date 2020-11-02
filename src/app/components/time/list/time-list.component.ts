import { Component, OnInit, Input } from '@angular/core';
import { TimeService } from '../../../services/time.service';
import { OrderService } from '../../../services/order.service';
import { Router } from '@angular/router';
import { Time } from '../../../models/time.model';
import { Order } from '../../../models/order.model';
import { MomentModule } from 'ngx-moment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgbDate, NgbCalendar, NgbDateAdapter, NgbDateStruct, NgbDateNativeAdapter} from '@ng-bootstrap/ng-bootstrap';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


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
  defaultDate: NgbDate;

  displayedColumns = ['orderNumber', 'date', 'description', 'time', 'overTime', 'actions'];
  hoveredDate: NgbDate;

  fromDate: NgbDate;
  toDate: NgbDate;
  filteredDates: any[] = [];

  timesBySelectedDate: any[] = [];
  filteredUserTimesBySelectedDate: any[];
  filteredUserTimesBySelectedDate2: any[];

  constructor(private orderService: OrderService, private timeService: TimeService, private router: Router, calendar: NgbCalendar) {
    this.fromDate = calendar.getNext(calendar.getToday(), 'd', - 7);
    this.toDate = calendar.getToday();
    this.defaultDate = calendar.getToday();
  }

  onDateSelection(date: NgbDate) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (this.fromDate && !this.toDate && date.after(this.fromDate)) {
      this.toDate = date;
      this.filterDate();
      console.log(this.filteredUserTimesBySelectedDate);
    } else {
      this.toDate = null;
      this.fromDate = date;
    }

  }

  isHovered(date: NgbDate) {
    return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
  }

  isInside(date: NgbDate) {
    return date.after(this.fromDate) && date.before(this.toDate);
  }

  isRange(date: NgbDate) {
    return date.equals(this.fromDate) || date.equals(this.toDate) || this.isInside(date) || this.isHovered(date);
  }


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
      (data: any) => {
        this.userTimes = data.times;
        this.timesBySelectedDate = data.orders;
        console.log(this.timesBySelectedDate);
        this.filteredDates = data.times;
        this.filterDate();
        //this.filteredDates = this.filterDate();
       // console.log(data.orders);
        // console.log(this.filteredDates);
        console.log(this.filteredUserTimesBySelectedDate);
      });

      /* (data: Time[]) => {
        this.userTimes = data;
        console.log(this.userTimes);
      }); */
  }

  filterDate() {
    // console.log("Filter date called:");
    if ( this.toDate == null ) { this.toDate = this.defaultDate; }
    const dateFrom = new Date(this.fromDate.year, this.fromDate.month - 1, this.fromDate.day);
    const dateTo = new Date(this.toDate.year, this.toDate.month - 1, this.toDate.day);

    this.filteredDates = this.userTimes.filter((date) => {
      const theDate = new Date(date._id.date);
      return (dateFrom <= theDate && dateTo >= theDate);
     });

     this.filteredUserTimesBySelectedDate = this.timesBySelectedDate.filter((element) => {
      return element.dates.filter(date => {
       // console.log(date.date)
        const theDate = new Date(date.date);
        return (dateFrom <= theDate && dateTo >= theDate);
       })
     });
   }

  editTime(_id) {
    this.router.navigate([`times/edit/${_id}`]);
  }

  deleteTime(_id) {
    this.timeService.deleteTime(`${_id}`).subscribe(() => {
     this.getUsersTime(localStorage.getItem('user_id'));
    });
   /*  this.orderService.deleteTime(order_id, id).subscribe((time) => {
     console.log('Order Updated' + time);
    }); */
  }
}
