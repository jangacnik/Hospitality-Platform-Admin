import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {enviroment} from "../../../enviroments/enviroment";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TaskService {
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

  deleteTaskTemplate(taskListId: string) {
    return this.http.delete(enviroment.baseUrlTest + "task/template/" + taskListId);
  }
}
