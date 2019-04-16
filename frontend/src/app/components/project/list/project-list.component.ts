import { Component, OnInit, PipeTransform } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { ProjectService } from '../../../services/project.service';
import { Router } from '@angular/router';
import { Order } from '../../../models/order.model';
import { Project } from '../../../models/project.model';
import { HttpErrorResponse } from '@angular/common/http';
import { FormControl } from '@angular/forms';

import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';


let projects: Project[];



function search(text: string, pipe: PipeTransform): Project[] {
  return projects.filter(project => {
    const term = text.toLowerCase();
    return project.projectName.toString().includes(term)
        || project.description.toString().includes(term)
        || project.status.toString().includes(term);

  });
}

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css'],
  providers: [DecimalPipe]
})

export class ProjectListComponent implements OnInit {
  filter = new FormControl('');
  projects$: Observable<Project[]>;
  addOrder = false;
  public projectname = 'The Project';

  constructor(private pipe: DecimalPipe, private projectService: ProjectService, private router: Router) {

    this.projects$ = this.filter.valueChanges.pipe(
      startWith(''),
      map(text => search(text, this.pipe))
    );
  }

  ngOnInit() {
    this.fetchProjects();
  }
  addOrderToggle(){
    this.addOrder = !this.addOrder;
  }

  fetchProjects() {
    this.projectService.getProjects().subscribe(
      (data: Project[]) => {
        projects = data;
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
