import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TimeService } from '../../../services/time.service';
import { Router, ActivatedRoute } from '@angular/router';
//import {MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-edit',
  templateUrl: './time-edit.component.html',
  styleUrls: ['./time-edit.component.css']
})
export class TimeEditComponent implements OnInit {

  editForm: FormGroup;
  id: '';
  time: any = {};

  constructor(private route: ActivatedRoute, private timeService: TimeService,
              private fb: FormBuilder, private router: Router) {
    this.editForm = this.fb.group({
      date: ['', Validators.required],
      description: ['', Validators.required],
      time: 0
    });
    }

    editTime(date, description, time) {
       const updatedTime = {
         order: this.time.order,
         date: date,
         user: this.time.user,
         description: description,
         time: time,
       };

      this.timeService.editTime(this.id, updatedTime).subscribe(() => {
       /*  this.snackBar.open('Time updated succesfully', 'OK', {
          duration: 3000
        }); */
        this.router.navigate(['/times']);
      });
    }

    ngOnInit() {
      this.route.params.subscribe(params => {
        this.id = params.id;
        this.timeService.getTimeById(this.id).subscribe(res => {
          this.time = res;
          this.editForm.get('date').setValue(this.time.date);
          this.editForm.get('description').setValue(this.time.description);
          this.editForm.get('time').setValue(this.time.time);
        });
      });
    }
}
