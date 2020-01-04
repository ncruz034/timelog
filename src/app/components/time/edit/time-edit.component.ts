import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TimeService } from '../../../services/time.service';
import { Router, ActivatedRoute } from '@angular/router';
import {NgbDateAdapter, NgbDateStruct, NgbDateNativeAdapter} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit',
  templateUrl: './time-edit.component.html',
  styleUrls: ['./time-edit.component.css'],
  providers: [{provide: NgbDateAdapter, useClass: NgbDateNativeAdapter}]
})
export class TimeEditComponent implements OnInit {

  form: FormGroup;
  id: '';
  time: any = {};

  constructor(private route: ActivatedRoute, private timeService: TimeService,
              private fb: FormBuilder, private router: Router) {

    this.form = this.fb.group({
      date: ['', Validators.required],
      description: ['', Validators.required],
      time: 0,
      overTime: 0,
    });
    }

    editTime() {
       const updatedTime = {
        date : this.form.value.date,
        description : this.form.value.description,
        time : this.form.value.time,
        overTime: this.form.value.overTime,
        orderNumber: this.time.orderNumber,
        order_id: this.time.order_id,
        projectName: this.time.projectName,
        clientName: this.time.clientName,
        userName: this.time.userName,
         user_id: this.time.user_id,
       }

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
          this.form.get('date').setValue(new Date(this.time.date));
          this.form.get('description').setValue(this.time.description);
          this.form.get('time').setValue(this.time.time);
          this.form.get('overTime').setValue(this.time.overTime);
        });
      });
    }
}
