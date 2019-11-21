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
  client_id: any;

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
      this.project.date = this.form.value.date;
      this.project.projectName = this.form.value.projectName;
      this.project.client_id = this.client_id;
      this.project.clientName = this.form.value.clientName;
      this.project.description = this.form.value.description;
      this.project.status = this.form.value.status;

      this.projectService.addProject(this.project)
         .subscribe((project_id: any) => {
      });
      this.router.navigate([`projects/`]);
  }
  /*
    addProject2() {
        this.projectService.addProject2(
          this.form.value.date, this.form.value.projectName,
          this.client_id, this.form.value.clientName,
          this.form.value.description, this.form.value.status)
           .subscribe((project_id: any) => {
        });
        this.router.navigate([`projects/`]);
    }
    */
}
