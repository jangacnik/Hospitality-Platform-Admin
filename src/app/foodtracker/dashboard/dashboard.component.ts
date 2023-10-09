import {Component, OnInit} from '@angular/core';
import {FoodTrackerRestService} from "../service/food-tracker-rest.service";
import {FoodTrackerEntryFull} from "../model/FoodTrackerEntryFull";
import {FoodTrackerUserWithMealEntry} from "../model/FoodTrackerUserWithMealEntry";
import {FoodTrackerUser} from "../model/FoodTrackerUser";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MatDialog} from "@angular/material/dialog";
import {UserEditDialogComponent} from "../user-edit-dialog/user-edit-dialog.component";
import {CsvExportService} from "../service/csv-export.service";
import {forkJoin} from "rxjs";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  searchForm = new FormGroup({
    searchName: new FormControl('', []),
    searchDepartment: new FormControl('', [])
  })

  displayedColumns: string[] = ['employeeNumber', 'name', 'department', 'options'];
  displayedColumnsMeals: string[] = ['employeeNumber', 'name', 'department', 'meals', 'total'];
  showMeals = false;
  showEmployees = true;
  users: any;
  enties: any;
  employess: FoodTrackerUser[] = [];
  employeesOld: FoodTrackerUser[] = [];
    constructor(private foodTrackerRestService: FoodTrackerRestService, private dialog: MatDialog, private csvExport: CsvExportService) {
    }
  ngOnInit(): void {
      forkJoin([
          this.foodTrackerRestService.getCurrentMonthTracking(),
        this.foodTrackerRestService.getFoodPrice(),
      ]
      ).subscribe(r => {
        let currentMonthTracking = r[0];
        let priceObj = r[1];
        this.enties = currentMonthTracking.entries;
        this.users = [];
        for (let key of Object.keys(this.enties)) {
          // @ts-ignore
          let t:any = this.enties[key];
          // @ts-ignore
          t['total'] = t.mealEntry.mealCount * priceObj.price;
          // console.log(t);
          // @ts-ignore
          this.users.push(t);
        }
      });
    this.foodTrackerRestService.getAllUsers().subscribe(
      (data: FoodTrackerUser[]) => {
        this.employess = data;
        this.employeesOld = data;
        this.employess.sort((a,b) => +a.employeeNumber - +b.employeeNumber);
      }
    )
  }

  mealsSelected() {
    this.showEmployees = false;
    this.showMeals = true;
  }

  employessSelected() {
    this.showEmployees = true;
    this.showMeals = false;
  }

  onSearch() {
      const name = this.searchForm.get("searchName")?.value;
      const dep = this.searchForm.get("searchDepartment")?.value;

          this.employess = this.employeesOld.filter((val) => {
              return  name && (val.lastName+val.firstName).toLowerCase().includes(<string>name?.toLowerCase()) ||
                dep && val.departments.includes(<string>dep)
            });
        }
  onReset() {
      this.employess = this.employeesOld;
  }

  onUserEdit(user: FoodTrackerUser) {
      console.log(user);
      let dialogRef = this.dialog.open(UserEditDialogComponent, {
        width: '500px',
        height: '500px',
        data: {
          user: user
        }
      });

  }

  getReport() {
      this.csvExport.downloadFile(this.users, "report");
  }
}
