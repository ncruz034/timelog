import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../../services/project.service';
import { Router } from '@angular/router';
import { Order } from '../../../models/order.model';
import { Project } from '../../../models/project.model';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})

export class ProjectListComponent implements OnInit {
  panelOpenState = false;
  projects: Project[];
  orders: Order[];
  currentOrderId: String;

  constructor(private projectService: ProjectService, private router: Router) { }

  ngOnInit() {
    this.fetchProjects();
  }

  fetchProjects() {
    this.projectService.getProjects().subscribe(
      (data: Project[]) => {
        this.projects = data;
        console.log(this.projects);
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
  editProject(id) {
    console.log('Edditing client id: ' + id);
    this.router.navigate([`clients/edit/${id}`]);
  }

  deleteProject(id) {
    this.projectService.deleteProject(id).subscribe(() => {
      this.fetchProjects();
    });
  }

}
