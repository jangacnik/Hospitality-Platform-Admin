import {Component, OnInit} from '@angular/core';
import {FoodTrackerRestService} from "../service/food-tracker-rest.service";
import {FoodTrackerEntryFull} from "../model/FoodTrackerEntryFull";
import {FoodTrackerUserWithMealEntry} from "../model/FoodTrackerUserWithMealEntry";
import {FoodTrackerUser} from "../model/FoodTrackerUser";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  displayedColumns: string[] = ['employeeNumber', 'name', 'department', 'options'];
  displayedColumnsMeals: string[] = ['employeeNumber', 'name', 'department', 'meals'];
  showMeals = false;
  showEmployees = true;
  users: any;
  enties: any;
  employess: FoodTrackerUser[] = [];
    constructor(private foodTrackerRestService: FoodTrackerRestService) {
    }
  ngOnInit(): void {
    this.foodTrackerRestService.getCurrentMonthTracking().subscribe((data: FoodTrackerEntryFull) => {
      let currentMonthTracking = data;
      console.log("Current",currentMonthTracking);
      console.log(typeof currentMonthTracking);
      this.enties = currentMonthTracking.entries;
      this.users = [];
      for (let key of Object.keys(this.enties)) {
        console.log(key);
        // @ts-ignore
        const t:FoodTrackerUserWithMealEntry = this.enties[key];
        console.log(t);
        // @ts-ignore
        this.users.push(t);
      }
      console.log("entries", this.users);
    });

    this.foodTrackerRestService.getAllUsers().subscribe(
      (data: FoodTrackerUser[]) => {
        this.employess = data;
        this.employess.sort((a,b) => +a.employeeNumber - +b.employeeNumber);
      }
    )
  }

  getUser(userWithEntry: FoodTrackerUserWithMealEntry) {
      return userWithEntry.user;
  }

  getEntry(userWithEntry: FoodTrackerUserWithMealEntry) {
    return userWithEntry.mealEntry;
  }

  selectChanged() {
      this.showEmployees = !this.showEmployees;
      this.showMeals = !this.showMeals;
  }

  mealsSelected() {

    this.showEmployees = false;
    this.showMeals = true;
  }

  employessSelected() {
    this.showEmployees = true;
    this.showMeals = false;

  }


}
