import {AfterViewChecked, Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {ReservationEntry} from "../model/ReservationEntry";
import {ReservationService} from "../service/reservation.service";
import {MealType} from "../model/enum/meal-type";

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements AfterViewChecked, OnInit {

  displayedColumns: string[] = ['employeeNumber', 'name', 'department', 'meals', "numberOfMeals"];
  reservations: ReservationEntry[] = [];

  displayDate: string;
  noReservationAvailable = false;
  @ViewChild("self")
  self: ElementRef;
  parentH: number;
  reservationCount = 0;
  reservationCountLunch = 0;
  reservationCountDinner = 0;
  dataReady = false;

  constructor(private reservationService: ReservationService) {
  }

  sumReservationCount() {
    for (let res of this.reservations) {
      this.reservationCount += res.mealType.length;
      if (res.mealType.includes(MealType.LUNCH)) {
        this.reservationCountLunch++;
      }
      if (res.mealType.includes(MealType.DINNER)) {
        this.reservationCountDinner++;
      }
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.parentH = this.self.nativeElement.offsetParent.clientHeight * 0.75;
  }

  ngAfterViewChecked() {
    this.parentH = this.self.nativeElement.offsetParent.clientHeight * 0.75;
  }

  ngOnInit(): void {
    this.getReservationData();
    this.displayDate = new Date().toDateString();
  }

  getReservationData() {
    this.reservationService.getCurrentReservations().subscribe((data) => {
      this.reservations = data;
      this.dataReady = true;
      this.noReservationAvailable = false;
      this.reservations.sort((a, b) => Number(a.employeeNumber) - Number(b.employeeNumber))

      this.sumReservationCount();
    }, error => {
      this.dataReady = true;
      this.noReservationAvailable = true;
    });
  }

  refreshData() {
    this.dataReady = false;
    this.reservationCount = 0;
    this.reservationCountDinner = 0;
    this.reservationCountLunch = 0;
    this.getReservationData();
  }

}
