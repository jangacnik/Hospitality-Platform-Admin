import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {enviroment} from "../../../enviroments/enviroment";

@Injectable({
  providedIn: 'root'
})
export class TaskArchiveService {

  constructor(private http: HttpClient) { }

  public getAllTaskByDate(date: string) {
    return this.http.get(enviroment.baseUrlTest+"task/archive/all/"+date);
  }
}
