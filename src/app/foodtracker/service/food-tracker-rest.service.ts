import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {FoodTrackerEntryFull} from "../model/FoodTrackerEntryFull";

@Injectable({
  providedIn: 'root'
})
export class FoodTrackerRestService {

  constructor(private http: HttpClient) { }

  public getCurrentMonthTracking(): Observable<FoodTrackerEntryFull> {
    return this.http.get<FoodTrackerEntryFull>("http://0.0.0.0:8888/api/v1/track/current/month");
  }
}
