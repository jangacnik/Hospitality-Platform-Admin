import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {enviroment} from "../../../enviroments/enviroment";

@Injectable({
  providedIn: 'root'
})
export class TaskService {
"/api/v1/task/template"
  constructor(private http: HttpClient) { }


  getTaskTemplates() {
    return this.http.get(enviroment.baseUrlTest + "task/template");
  }

  postTaskTemplate(taskTemplate: any) {
    return this.http.post(enviroment.baseUrlTest + "task/template", taskTemplate);
  }
  putTaskTemplate(taskTemplate: any) {
    return this.http.put(enviroment.baseUrlTest + "task/template", taskTemplate);
  }
}
