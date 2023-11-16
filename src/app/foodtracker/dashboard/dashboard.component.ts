import {Component, OnInit} from '@angular/core';
import {FoodTrackerRestService} from "../service/food-tracker-rest.service";
import {FoodTrackerEntryFull} from "../model/FoodTrackerEntryFull";
import {FoodTrackerUserWithMealEntry} from "../model/FoodTrackerUserWithMealEntry";
import {FoodTrackerUser} from "../model/FoodTrackerUser";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MatDialog} from "@angular/material/dialog";
import {UserEditDialogComponent} from "../dialogs/user-edit-dialog/user-edit-dialog.component";
import {CsvExportService} from "../service/csv-export.service";
import {forkJoin} from "rxjs";
import {DepartmentService} from "../service/department.service";
import {DepartmentListItem} from "../model/DepartmentListItem";
import {MonthlyMealInfo} from "../model/MonthlyMealInfo";
import {ReservationService} from "../service/reservation.service";
import {ReservationEntry} from "../model/ReservationEntry";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {



  showMeals = false;
  showEmployees = true;
  showReservations = false;
  entries: MonthlyMealInfo[];
  employess: FoodTrackerUser[] = [];
  departmentList: DepartmentListItem[] = undefined;
  price: number;
  reservations: ReservationEntry[];
  constructor(private foodTrackerRestService: FoodTrackerRestService,
              private departmentService: DepartmentService,
              private reservationService: ReservationService) {
  }

  ngOnInit(): void {
    forkJoin([
        this.foodTrackerRestService.getCurrentMonthTracking(),
        this.foodTrackerRestService.getFoodPrice(),
        this.foodTrackerRestService.getAllUsers(),
      this.reservationService.getCurrentReservations()
      ]
    ).subscribe(r => {
      this.entries = r[0];
      this.price = r[1];
      this.employess = r[2];
      this.reservations = r[3];
    });

    this.departmentService.getDepartmentNames().then((data) => {
      this.departmentList = data;
    });

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


  protected readonly undefined = undefined;
}
