import { Component, OnInit } from '@angular/core';
import { TimeService } from '../../../time.service';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';
import { Time } from '../../../time.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  times: Time[];
  displayedColumns = ['order','date','name','last','description','time'];

  constructor(private timeService : TimeService, private router:Router) { }

  ngOnInit() {
    this.fetchTimes();
  }
  fetchTimes(){
    this.timeService.getTimes().subscribe(
      (data: Time[])=>{
        this.times = data;
        console.log('Data requested...');
        console.log(this.times);
      });
  }
  editTime(id){
    this.router.navigate([`/edit/${id}`]);
  }
  deleteTime(id){
    this.timeService.deleteTime(id).subscribe(()=>{
      this.fetchTimes();
    });
  }
}
