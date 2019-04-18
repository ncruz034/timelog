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
      time: 0
    });
    }

    editTime() {
       const updatedTime = {
         order: this.time.order,
         date: this.form.value.date,
         user: this.time.user,
         description: this.form.value.description,
         time: this.form.value.time,
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
        console.log(params);
        this.id = params.id;
        this.timeService.getTimeById(this.id).subscribe(res => {
          this.time = res;
          console.log(this.time.date );
          this.form.get('date').setValue(new Date(this.time.date));
          this.form.get('description').setValue(this.time.description);
          this.form.get('time').setValue(this.time.time);
        });
      });
    }
}
