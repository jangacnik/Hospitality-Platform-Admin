import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { enviroment } from '../../../enviroments/enviroment';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskTemplateService {
  constructor(private http: HttpClient) {}

  getTaskTemplates() {
    return this.http.get(enviroment.baseUrlTest + 'task/template');
  }

  getTaskTemplateById(taskId) {
    return this.http.get(enviroment.baseUrlTest + 'task/template/id/' + taskId);
  }

  postTaskTemplate(taskTemplate: any) {
    return this.http.post(
      enviroment.baseUrlTest + 'task/template',
      taskTemplate
    );
  }
  putTaskTemplate(taskTemplate: any) {
    return this.http.put(
      enviroment.baseUrlTest + 'task/template',
      taskTemplate
    );
  }

  deleteTaskTemplate(taskListId: string) {
    return this.http.delete(
      enviroment.baseUrlTest + 'task/template/' + taskListId
    );
  }
}
