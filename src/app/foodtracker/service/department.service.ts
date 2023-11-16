import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {DepartmentListItem} from "../model/DepartmentListItem";

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  get departmentsList(): DepartmentListItem[] {
    return this._departmentsList;
  }

  set departmentsList(value: DepartmentListItem[]) {
    this._departmentsList = value;
  }
  private baseUrl = "http://0.0.0.0:8888/api/v1/department";
  private _departmentsList: DepartmentListItem[] = undefined
  constructor(private http: HttpClient) { }

  public getDepartmentNames(refreshDepartments: boolean): Promise<DepartmentListItem[]> {
    return new Promise((resolve, reject) => {
      if(this._departmentsList == undefined || refreshDepartments) {
        this.getDepartmentsRequest().subscribe((data) =>
        {
          this._departmentsList = [];
          for (let x of data) {
            this._departmentsList.push(new DepartmentListItem(x,x));
          }
          resolve(this._departmentsList)
        });
      } else {

        resolve(this._departmentsList);
      }
    });
  }

  private getDepartmentsRequest() {
    return this.http.get<any>(this.baseUrl+"/all/names");
  }

  public createDepartment( departmentName: any) {
    return this.http.post<any>(this.baseUrl, departmentName);
  }
}
