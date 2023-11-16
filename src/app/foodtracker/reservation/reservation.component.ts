import {Component, Input} from '@angular/core';
import {ReservationEntry} from "../model/ReservationEntry";

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent {

  displayedColumns: string[] = ['employeeNumber', 'name', 'department',  'meals', "numberOfMeals"];
  @Input() reservations: ReservationEntry[];

  constructor() {
  }
}
