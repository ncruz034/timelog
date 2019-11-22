import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  uri = 'http://localhost:3000/api';
  constructor(private http: HttpClient) { }


  getProjects() {
    return this.http.get(`${this.uri}/projects`);
  }

  getProjectById(project_id) {
    return this.http.get(`${this.uri}/projects/${project_id}`);
  }

  getProjectByName(projectName) {
    return this.http.get(`${this.uri}/projects/name/${projectName}`);
  }

  addOrderToProject(project_id, order_id) {
    const updatedProjectOrder = {
      order_id: order_id,
    };

    return this.http.post(`${this.uri}/projects/${project_id}/time`, updatedProjectOrder);
  }

  addProject(project) {
    return this.http.post(`${this.uri}/projects`, project);
  }
  /* deleteProject(_id, time_id) {
    return this.http.delete(`${this.uri}/projects/${_id}/time/${time_id}`);
  } */

  editProject(_id, updatedProject) {
    return this.http.put(`${this.uri}/projects/${_id}`, updatedProject);
  }

  deleteProject(_id) {
    return this.http.delete(`${this.uri}/projects/delete/${_id}`);
  }

}
