import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { TimeService } from '../../../time.service';
import { Router } from '@angular/router';
//import { MatTableDataSource } from '@angular/material';
//import { Currency } from '../../../currency.model';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  createForm: FormGroup;

  constructor(private timeService: TimeService, private fb:FormBuilder, private router:Router) {
    this.createForm = this.fb.group({
      date:['',Validators.required],
      order: '',
      name: '',
      last: '',
      description: '',
      time:0
    });
    }

    addTime(date,order,name,last,description,time){
      //TODO:
      //Calculate the price in USD base on data
      //let priceUsd = balance / priceOfBTC;
      this.timeService.addTime(date,order,name,last,description,time).subscribe(()=>{
        this.router.navigate(['/list']);
      });
    }
  ngOnInit() {
  }

}
