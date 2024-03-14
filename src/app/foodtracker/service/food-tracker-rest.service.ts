import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {FoodTrackerUser} from "../model/FoodTrackerUser";
import {MonthlyMealInfo} from "../model/MonthlyMealInfo";
import {CreateFoodTrackerUserModel} from "../model/CreateFoodTrackerUserModel";
import {enviroment} from "../../../enviroments/enviroment";

@Injectable({
  providedIn: 'root'
})
export class FoodTrackerRestService {
  get user(): FoodTrackerUser {
    return this._user;
  }

  set user(value: FoodTrackerUser) {
    this._user = value;
  }

  private _user: FoodTrackerUser = undefined;

  constructor(private http: HttpClient) {
  }

  public getCurrentMonthTracking(): Observable<MonthlyMealInfo[]> {
    return this.http.get<MonthlyMealInfo[]>(enviroment.baseUrlTest + "track/current/month");
  }

  public getAllUsers(): Observable<FoodTrackerUser[]> {
    return this.http.get<FoodTrackerUser[]>(enviroment.baseUrlTest + "department/user/all");
  }

  public getFoodPrice(): Observable<any> {
    return this.http.get<any>(enviroment.baseUrlTest + "track/price");
  }

  public updateUserPersonalInfo(usr: any): Observable<any> {
    return this.http.put<any>(enviroment.baseUrlTest + "department/user", usr);
  }

  public createUser(usr: any): Observable<any> {
    return this.http.post<any>(enviroment.baseUrlTest + "department/user", usr);
  }

  public deleteUser(employeeId: string): Observable<any> {
    return this.http.delete<any>(enviroment.baseUrlTest + "department/user/" + employeeId);
  }

  getUserData(): Observable<FoodTrackerUser> {
    return this.http.get<FoodTrackerUser>(enviroment.baseUrlTest + "department/user/me");
  }

  updatePlandayData(): Observable<void> {
    return this.http.post<void>(enviroment.baseUrlTest + "admin/update", null);
  }
}
