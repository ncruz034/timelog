import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../../services/project.service';
import { Router } from '@angular/router';
import { Project } from '../../../models/project.model';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-list',
  templateUrl: './billing-list.component.html',
  styleUrls: ['./billing-list.component.css']
})

export class BillingListComponent implements OnInit {

  projects: Project[];
  constructor(private projectService: ProjectService, private router: Router ) { }

  ngOnInit() {
    this.fetchProjects();
  }

  fetchProjects() {
    this.projectService.getProjectStats().subscribe(
      (data: Project[]) => {
        this.projects = data;
        console.log(this.projects)
      },
      err => {
        if (err instanceof HttpErrorResponse) {
            if (err.status === 401) {
              this.router.navigate(['/auth']);
            }
        }
      }
    );
  }

}
