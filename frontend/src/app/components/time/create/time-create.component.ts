import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { TimeService } from '../../../services/time.service';
import { Router } from '@angular/router';
//import { MatTableDataSource } from '@angular/material';
//import { Currency } from '../../../currency.model';
@Component({
  selector: 'app-create',
  templateUrl: './time-create.component.html',
  styleUrls: ['./time-create.component.css']
})
export class TimeCreateComponent implements OnInit {

  createForm: FormGroup;

  constructor(private timeService: TimeService, private fb:FormBuilder, private router:Router) {
    
    this.createForm = this.fb.group({
      date:['',Validators.required],
      order:['',Validators.required],
      name: ['',Validators.required],
      last: ['',Validators.required],
      description: ['',Validators.required],
      time:0
    });
    }

    addTime(date,order,name,last,description,time){
 
      this.timeService.addTime(date,order,name,last,description,time).subscribe(()=>{
        this.router.navigate(['/times']);
      });
    }

  ngOnInit() {
  }

}
