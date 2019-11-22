import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProjectService } from '../../../services/project.service';
import { Router, ActivatedRoute } from '@angular/router';
//import {MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-project-edit',
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.css']
})
export class ProjectEditComponent implements OnInit {

  form: FormGroup;
  id: '';
  projectNumber: '';
  project: any = {};
  date: Date;

  constructor(private projectService: ProjectService, private fb: FormBuilder,
    private router: Router, private route: ActivatedRoute) {
     /* this.form = this.fb.group({
        projectName: ['', Validators.required],
        description: ['', Validators.required],
        status: ['', Validators.required],
      });
     }*/

    
      this.form = this.fb.group({
        'projectName': [this.project.projectName, Validators.required],
        //'date': [this.project.date, Validators.required],
        'description': [this.project.description, Validators.required],
        'status': [this.project.status, Validators.required],
      });
    }

  editProject() {
       const updatedProject = {

         projectName: this.form.value.projectName,
         client_id: this.project.client_id,
         clientName: this.project.clientName,
         date: this.project.date,
         description: this.form.value.description,
         status: this.form.value.status,
       };
       
       
     this.projectService.editProject(this.id, updatedProject).subscribe(() => {
       /* this.snackBar.open('Order updated succesfully', 'OK', {
         duration: 3000
       }); */
       this.router.navigate(['/projects']);
     });
   }
   
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.projectService.getProjectById(this.id).subscribe(res => {
        this.project = res;
        this.form.get('projectName').setValue(this.project.projectName);
        this.form.get('description').setValue(this.project.description);
        this.form.get('status').setValue(this.project.status);
        
      });
    });
  }




}
