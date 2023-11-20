import {AfterViewChecked, Component, ElementRef, HostListener, Input, OnInit, ViewChild} from '@angular/core';
import {ReservationEntry} from "../model/ReservationEntry";
import {FoodTrackerRestService} from "../service/food-tracker-rest.service";
import {ReservationService} from "../service/reservation.service";
import {data} from "autoprefixer";

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements AfterViewChecked, OnInit{

  displayedColumns: string[] = ['employeeNumber', 'name', 'department',  'meals', "numberOfMeals"];
  reservations: ReservationEntry[];

  @ViewChild("self")
  self: ElementRef;
  parentH: number;
  reservationCount = 0;
  dataReady = false;
  sumReservationCount() {
    for(let res of this.reservations) {
      this.reservationCount += res.mealType.length;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.parentH = this.self.nativeElement.offsetParent.clientHeight*0.75;
  }
  ngAfterViewChecked() {
    this.parentH = this.self.nativeElement.offsetParent.clientHeight*0.75;
  }
  constructor(private reservationService: ReservationService) {
  }

  ngOnInit(): void {
    this.getReservationData();
  }
  getReservationData() {
    this.reservationService.getCurrentReservations().subscribe((data) => {
      this.reservations = data;
      this.dataReady = true;

      this.sumReservationCount();
    });
  }

  refreshData() {
    this.dataReady = false;
    this.getReservationData();
  }

  protected readonly data = data;
}
