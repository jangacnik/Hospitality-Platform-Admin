import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {FoodTrackerEntryFull} from "../model/FoodTrackerEntryFull";
import {FoodTrackerUser} from "../model/FoodTrackerUser";
import {MonthlyMealInfo} from "../model/MonthlyMealInfo";
import {CreateFoodTrackerUserModel} from "../model/CreateFoodTrackerUserModel";
import {enviroment} from "../../../enviroments/enviroment";

@Injectable({
  providedIn: 'root'
})
export class FoodTrackerRestService {

  constructor(private http: HttpClient) { }

  public getCurrentMonthTracking(): Observable<MonthlyMealInfo[]> {
    return this.http.get<MonthlyMealInfo[]>(enviroment.baseUrlTest + "track/current/month");
  }

  public getAllUsers():Observable<FoodTrackerUser[]>{
    return this.http.get<FoodTrackerUser[]>(enviroment.baseUrlTest + "department/user/all");
  }

  public getFoodPrice(): Observable<any> {
    return this.http.get<any>(enviroment.baseUrlTest + "track/price");
  }

  public updateUserPersonalInfo(usr: any): Observable<any> {
    return this.http.put<any>(enviroment.baseUrlTest + "department/user", usr);
  }

  public createUser(usr: CreateFoodTrackerUserModel): Observable<any> {
    // let body = JSON.stringify(usr);
    // console.log(body);
    return this.http.post<any>(enviroment.baseUrlTest + "department/user", usr);
  }

  public deleteUser(employeeId: string): Observable<any> {
    return this.http.delete<any>(enviroment.baseUrlTest + "department/user/"+employeeId);
  }
}
