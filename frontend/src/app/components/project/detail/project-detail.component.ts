import { Component, OnInit } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { ProjectService } from '../../../services/project.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Project } from 'src/app/models/project.model';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {

  project: Project;
  id: '';

  constructor(private route: ActivatedRoute,
              private projectService: ProjectService,
              http: HttpClient, router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
      console.log(this.id);
      this.projectService.getProjectById(this.id)
      .subscribe(
        (project: Project) => {
          this.project = project;
         console.log(this.project);
      });

      });
  }
  }

