import {Component, OnInit} from '@angular/core';
import {FoodTrackerRestService} from "../service/food-tracker-rest.service";
import {DepartmentService} from "../service/department.service";
import {DepartmentListItem} from "../model/DepartmentListItem";
import {ReservationService} from "../service/reservation.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


  showMeals = false;
  showEmployees = true;
  showReservations = false;
  departmentList: DepartmentListItem[] = undefined;
  price: number;

  constructor(private foodTrackerRestService: FoodTrackerRestService,
              private departmentService: DepartmentService,
              private reservationService: ReservationService) {
  }

  ngOnInit(): void {
    this.fetchData(false);
  }

  fetchData(refreshDepartments: boolean) {

    this.departmentService.getDepartmentNames(refreshDepartments).then((data) => this.departmentList = data);

    this.foodTrackerRestService.getFoodPrice().subscribe((price) => this.price = price);

  }

  mealsSelected() {
    this.showEmployees = false;
    this.showMeals = true;
    this.showReservations = false;
  }

  employessSelected() {
    this.showEmployees = true;
    this.showMeals = false;
    this.showReservations = false;
  }

  reservationsSelected() {
    this.showEmployees = false;
    this.showMeals = false;
    this.showReservations = true;
  }

  onRefresh() {
    this.fetchData(true);
  }
}
