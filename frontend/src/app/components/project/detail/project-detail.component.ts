import { Component, OnInit } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { ProjectService } from '../../../services/project.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Project } from 'src/app/models/project.model';
import { Order } from 'src/app/models/order.model';
import { Time } from 'src/app/models/time.model';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {

  project: Project;
  id: '';
  order: Order;
  time: Time;

  constructor(private route: ActivatedRoute,
              private projectService: ProjectService,
              http: HttpClient, router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
     // console.log(this.id);
      this.projectService.getProjectById(this.id)
      .subscribe(
        (project: Project) => {
          this.project = project;
          if(this.project){
            console.log('Orders: ' + this.project.projectOrders.length + ' orders')

            for(this.order of this.project.projectOrders){
              console.log(this.order.orderNumber);
            }

            console.log('Times: ' + this.project.times.length + ' times')
            
            for(this.time of this.project.times){
              console.log('Order: ' + this.time.orderNumber + '  Regular: ' + this.time.time + ' Over: ' + this.time.overTime);
            }
          }
       //  console.log(this.project);
      });

      });
    }
  }

