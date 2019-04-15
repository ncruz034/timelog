import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ProjectService } from '../../../services/project.service';
import { Router } from '@angular/router';
import { Project } from '../../../models/project.model';
import {NgbDateAdapter, NgbDateStruct, NgbDateNativeAdapter} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-project-create',
  templateUrl: './project-create.component.html',
  styleUrls: ['./project-create.component.css'],
  providers: [{provide: NgbDateAdapter, useClass: NgbDateNativeAdapter}]
})
export class ProjectCreateComponent implements OnInit {
  get projectName(){ return this.form.get('projectName');}

  form: FormGroup;
  project: Project = new Project();
    constructor(private projectService: ProjectService, private fb: FormBuilder, private router: Router) { }
  
     ngOnInit() {
      this.form = this.fb.group({
        projectName: [this.project.projectName, Validators.required],
        date: [this.project.date, Validators.required],
        description: [this.project.description, Validators.required],
        status: [this.project.status, Validators.required]
      });
    }
    
    addProject() {
        this.projectService.addProject(
          this.form.value.date, this.form.value.projectName,
          this.form.value.description, this.form.value.status)
           .subscribe((project_id: any) => {
              console.log('this is the project_id ' + project_id);
          });
        } 
        
}
