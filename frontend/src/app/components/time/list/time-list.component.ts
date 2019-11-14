import { Component, OnInit, Input } from '@angular/core';
import { TimeService } from '../../../services/time.service';
import { OrderService } from '../../../services/order.service';
import { Router } from '@angular/router';
import { Time } from '../../../models/time.model';
import { Order } from '../../../models/order.model';
import { MomentModule } from 'ngx-moment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgbDate, NgbCalendar, NgbDateAdapter, NgbDateStruct, NgbDateNativeAdapter} from '@ng-bootstrap/ng-bootstrap';


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
  filteredDates: any[] = [];

  displayedColumns = ['orderNumber', 'date', 'description', 'time', 'overTime', 'actions'];
  hoveredDate: NgbDate;

  fromDate: NgbDate;
  toDate: NgbDate;


  constructor(private orderService: OrderService, private timeService: TimeService, private router: Router, calendar: NgbCalendar) {
    this.fromDate = calendar.getToday();
    this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
  }

  onDateSelection(date: NgbDate) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (this.fromDate && !this.toDate && date.after(this.fromDate)) {
      this.toDate = date;
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
        console.log(this.userTimes);
       /*
        let newDate = '10/05/2019';
        let jsDate = new Date(newDate);
        let dateObject = {
          "year": 2019,
          "month": 11,
          "day": 13
        }

        var dateObToJs = new Date(dateObject.year, dateObject.month, dateObject.day);
        console.log('dateObject: ' + dateObToJs);
        console.log('jsDAte: ' + jsDate);
*/

      });


      /* (data: Time[]) => {
        this.userTimes = data;
        console.log(this.userTimes);
      }); */
  }

  filterDateRange() {
   // console.log(fromDate + ' , ' + toDate);
    this.filteredDates = this.userTimes.filter((date) => {
      console.log("this is date: " + date.time);
    const dateFrom = new Date(this.fromDate.year, this.fromDate.month - 1, this.fromDate.day);
    const dateTo = new Date(this.toDate.year, this.toDate.month - 1, this.toDate.day);
    console.log(dateFrom);
    return (dateFrom <= date && dateTo >= date);
    });
    console.log(this.filteredDates);

   /*let dateFrom = new Date(this.fromDate.year, this.fromDate.month-1, this.fromDate.day);
    let dateTo = new Date(this.toDate.year, this.toDate.month-1, this.toDate.day);
    let filteredUserTimes = [];

  this.userTimes.forEach(function(time) {
    let theDate = new Date(time._id.date);
   console.log("This is the Date: " + theDate);
    if(dateFrom <= theDate && dateTo >= theDate){
      filteredUserTimes.push(time);
      console.log(theDate);
    }
    console.log("the times" + JSON.parse(filteredUserTimes[0].times));
  });*/
  }

  filterDates() {
    console.log("In filter Dates");

    //const dateFrom = new Date(this.fromDate.year, this.fromDate.month - 1, this.fromDate.day);
    //const dateTo = new Date(this.toDate.year, this.toDate.month - 1, this.toDate.day);
    return true;//(dateFrom <= date && dateTo >= date);
  }




/*
  getUsersTimeRange(user_id) {
    this.timeService.getUsersTimeRange(user_id,from,to).subscribe(
      (data: any) => {
        this.userTimes = data.times;
        console.log(this.userTimes);
      });
  }
*/
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
