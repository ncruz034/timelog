import { Component, OnInit } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { OrderService } from '../../../services/order.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Order } from 'src/app/models/order.model';
import { Time } from '../../../models/time.model';

@Component({
  selector: 'app-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {
  order: Order;
  id: '';
  time: Time;
  ovrTime: Time;
  times: Time[];
  officeRegTimeCounter = 0;
  fieldRegTimeCounter = 0;
  officeOvrTimeCounter = 0;
  fieldOvrTimeCounter = 0;
  officeTotalHours = 0;
  fieldTotalHours = 0;

  displayedColumns = ['date', 'user', 'description', 'time'];
  currentJustify = 'fill';
  constructor(private route: ActivatedRoute,
              private orderService: OrderService,
              http: HttpClient, router: Router) { }

    ngOnInit() {
      this.route.params.subscribe(params => {
        this.id = params.id;
        this.orderService.getOrderById(this.id)
        .subscribe(
          (order: Order) => {
            this.order = order;
            if (this.order) {
              for (this.time of this.order.time) {
                if(this.time.isField){
                  this.fieldRegTimeCounter += Number(this.time.time);
                  this.fieldOvrTimeCounter += Number(this.time.overTime)
                }else{
                  console.log('Office Reg: ' + this.officeRegTimeCounter  + ' + ' + this.time.time)
                  this.officeRegTimeCounter += Number(this.time.time);
                  console.log('Office Over: ' + this.officeOvrTimeCounter  + ' + ' + this.time.overTime)
                  this.officeOvrTimeCounter += Number(this.time.overTime);
                }
              }

            this.officeTotalHours = this.officeRegTimeCounter + this.officeOvrTimeCounter;
            this.fieldTotalHours = this.fieldRegTimeCounter + this.fieldOvrTimeCounter;
        
          } else {
            console.log('No order available!');
          }
        });

        });
    }
  }
