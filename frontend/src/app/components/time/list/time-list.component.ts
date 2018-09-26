import { Component, OnInit } from '@angular/core';
import { TimeService } from '../../../services/time.service';
import { Router } from '@angular/router';
import { Time } from '../../../models/time.model';
import { MomentModule } from 'ngx-moment';

@Component({
  selector: 'app-list',
  templateUrl: './time-list.component.html',
  styleUrls: ['./time-list.component.css']
})
export class TimeListComponent implements OnInit {

  times: Time[];
  displayedColumns = ['orderNumber', 'date', 'description', 'time', 'actions'];

  constructor(private timeService: TimeService, private router: Router) { }

  ngOnInit() {
    this.fetchTimes();
  }
  fetchTimes() {
    this.timeService.getTimes().subscribe(
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
      this.fetchTimes();
    });
  }
}
