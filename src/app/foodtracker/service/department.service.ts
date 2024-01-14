import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {DepartmentListItem} from "../model/DepartmentListItem";
import {enviroment} from "../../../enviroments/enviroment";

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  constructor(private http: HttpClient) {
  }

  private _departmentsList: DepartmentListItem[] = undefined

  get departmentsList(): DepartmentListItem[] {
    return this._departmentsList;
  }

  set departmentsList(value: DepartmentListItem[]) {
    this._departmentsList = value;
  }

  public getDepartmentNames(refreshDepartments: boolean): Promise<DepartmentListItem[]> {
    return new Promise((resolve, reject) => {
      if (this._departmentsList == undefined || refreshDepartments) {
        this.getDepartmentsRequest().subscribe((data) => {
          this._departmentsList = [];
          for (let x of data) {
            this._departmentsList.push(new DepartmentListItem(x, x));
          }
          resolve(this._departmentsList)
        });
      } else {

        resolve(this._departmentsList);
      }
    });
  }

  public createDepartment(departmentName: any) {
    return this.http.post<any>(enviroment.baseUrlTest + "department", departmentName);
  }

  private getDepartmentsRequest() {
    return this.http.get<any>(enviroment.baseUrlTest + "department/all/names");
  }
  public getAllDepartmentsRequest() {
    return this.http.get<any>(enviroment.baseUrlTest + "department/all");
  }
}
