import { Component, OnInit} from '@angular/core';
import { ProjectService } from '../../../services/project.service';
import { Router } from '@angular/router';
import { Project } from '../../../models/project.model';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css'],
})

export class ProjectListComponent implements OnInit {

  addOrder = false;
  public projectname = 'The Project';
  projects: Project[];
  filteredProjects: Project[];
  private _searchTerm: string;

  constructor(private projectService: ProjectService, private router: Router) {}

  ngOnInit() {
    this.fetchProjects();
  }

  get searchTerm(): string{
    return this._searchTerm;
  }

  set searchTerm(value: string){
    this._searchTerm = value;
    this.filteredProjects = this.filtereProjects(value);
  }
  filtereProjects(searchString: string){
    return this.projects.filter(project =>
      project.projectName.toString().toLowerCase().indexOf(searchString.toLowerCase()) !== -1);
  }

  filterProjects(){

  }
  addOrderToggle(){
    this.addOrder = !this.addOrder;
  }

  fetchProjects() {
    this.projectService.getProjects().subscribe(
      (data: Project[]) => {
        this.projects = data;
        this.filteredProjects = data;
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
    console.log('Edditing project id: ' + id);
    this.router.navigate([`projects/edit/${id}`]);
  }

  deleteProject(id) {
    this.projectService.deleteProject(id).subscribe(() => {
      this.fetchProjects();
    });
  }

}
