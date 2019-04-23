import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ProjectService } from '../../../services/project.service';
import { Router, ActivatedRoute} from '@angular/router';
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
  client_id: String;

    constructor(private route: ActivatedRoute, private projectService: ProjectService, private fb: FormBuilder, private router: Router) {
      this.form = this.fb.group({
        'projectName': [this.project.projectName, Validators.required],
        'clientName': [this.project.clientName, Validators.required],
        'date': [this.project.date, Validators.required],
        'description': [this.project.description, Validators.required],
        'status': [this.project.status, Validators.required]
      });
     }

     ngOnInit() {
      this.route.params.subscribe( params => {
        this.client_id = params.client_id;
        this.form.get('clientName').setValue(params.clientName);
     });
    }

    addProject() {
        this.projectService.addProject(
          this.form.value.date, this.form.value.projectName,
          this.client_id, this.form.value.clientName,
          this.form.value.description, this.form.value.status)
           .subscribe((project_id: any) => {
              console.log('this is the project_id ' + project_id);
        });
    }
}
