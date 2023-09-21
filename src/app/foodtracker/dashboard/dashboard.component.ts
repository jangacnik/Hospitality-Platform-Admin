import {Component, OnInit} from '@angular/core';
import {FoodTrackerRestService} from "../service/food-tracker-rest.service";
import {FoodTrackerEntryFull} from "../model/FoodTrackerEntryFull";
import {FoodTrackerUserWithMealEntry} from "../model/FoodTrackerUserWithMealEntry";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  users: any;
  enties: any;
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
  }

  getUser(userWithEntry: FoodTrackerUserWithMealEntry) {
      return userWithEntry.user;
  }

  getEntry(userWithEntry: FoodTrackerUserWithMealEntry) {
    return userWithEntry.mealEntry;
  }

}
