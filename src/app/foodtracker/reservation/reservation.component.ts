import {AfterViewChecked, Component, ElementRef, HostListener, Input, ViewChild} from '@angular/core';
import {ReservationEntry} from "../model/ReservationEntry";

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements AfterViewChecked{

  displayedColumns: string[] = ['employeeNumber', 'name', 'department',  'meals', "numberOfMeals"];
  @Input() reservations: ReservationEntry[];

  @ViewChild("self")
  self: ElementRef;
  parentH: number;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.parentH = this.self.nativeElement.offsetParent.clientHeight*0.75;
  }
  ngAfterViewChecked() {
    this.parentH = this.self.nativeElement.offsetParent.clientHeight*0.75;
  }
  constructor() {
  }
}
