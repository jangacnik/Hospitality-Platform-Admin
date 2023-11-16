import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {DatePipe} from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private http: HttpClient,private datePipe: DatePipe) { }


  public getCurrentReservations():Observable<any> {
    let myDate = new Date();
    let myDateStr = this.datePipe.transform(myDate, 'yyyy-MM-dd');
    return this.http.get("http://0.0.0.0:8888/api/v1/reserve/"+myDateStr);
  }

}
