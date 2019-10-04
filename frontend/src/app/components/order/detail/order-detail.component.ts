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
           //console.log(this.order);
           let regTimeCounter = 0;
            let ovrTimeCounter: 0;


        for(this.time of this.order.time) {
          regTimeCounter += Number(this.time.time);
          //console.log( "the type of :" + typeof(Number(this.time.time)));
        }
        console.log("Here is the regular time: " + regTimeCounter);

        for(this.ovrTime of this.order.time) {
          ovrTimeCounter += Number(this.ovrTime.overTime);
        }
        console.log("Here is the over time: " + ovrTimeCounter);

        });

        });
    }
  }
