import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { TimeService } from '../../../services/time.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './time-edit.component.html',
  styleUrls: ['./time-edit.component.css']
})
export class TimeEditComponent {

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
 
      this.timeService.editTime(id,date,order,name,last,description,time).subscribe(()=>{
        this.router.navigate(['/times']);
      });
    }


}
