import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {FoodTrackerEntryFull} from "../model/FoodTrackerEntryFull";
import {FoodTrackerUser} from "../model/FoodTrackerUser";
import {MonthlyMealInfo} from "../model/MonthlyMealInfo";
import {CreateFoodTrackerUserModel} from "../model/CreateFoodTrackerUserModel";

@Injectable({
  providedIn: 'root'
})
export class FoodTrackerRestService {

  constructor(private http: HttpClient) { }

  public getCurrentMonthTracking(): Observable<MonthlyMealInfo[]> {
    return this.http.get<MonthlyMealInfo[]>("http://0.0.0.0:8888/api/v1/track/current/month");
  }

  public getAllUsers():Observable<FoodTrackerUser[]>{
    return this.http.get<FoodTrackerUser[]>("http://0.0.0.0:8888/api/v1/department/user/all");
  }

  public getFoodPrice(): Observable<any> {
    return this.http.get<any>("http://0.0.0.0:8888/api/v1/track/price");
  }

  public updateUserPersonalInfo(usr: any): Observable<any> {
    return this.http.put<any>("http://0.0.0.0:8888/api/v1/department/user", usr);
  }

  public createUser(usr: CreateFoodTrackerUserModel): Observable<any> {
    // let body = JSON.stringify(usr);
    // console.log(body);
    return this.http.post<any>("http://0.0.0.0:8888/api/v1/department/user", usr);
  }
}
