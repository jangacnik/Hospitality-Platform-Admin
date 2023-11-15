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
import {DepartmentService} from "../service/department.service";
import {DepartmentListItem} from "../model/DepartmentListItem";

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
  showReservations = false;
  users: any;
  entries: any;
  entriesOld: any;
  employess: FoodTrackerUser[] = [];
  employeesOld: FoodTrackerUser[] = [];
  departmentList: DepartmentListItem[] = undefined;
  price: number;
    constructor(private foodTrackerRestService: FoodTrackerRestService, private dialog: MatDialog, private csvExport: CsvExportService, private departmentService: DepartmentService) {
    }
  ngOnInit(): void {
      forkJoin([
          this.foodTrackerRestService.getCurrentMonthTracking(),
        this.foodTrackerRestService.getFoodPrice(),
      ]
      ).subscribe(r => {
        let currentMonthTracking = r[0];
        this.price = r[1];
        this.entries = currentMonthTracking.entries;
        this.users = [];
        for (let key of Object.keys(this.entries)) {
          // @ts-ignore
          let t:any = this.entries[key];
          // // @ts-ignore
          // t['total'] = t.mealEntry.mealCount * priceObj.price;
          // console.log(t);
          // @ts-ignore
          this.users.push(t);
          console.log("PRIMER");
          console.log(t);
        }
        this.entriesOld = this.entries;

        console.log(this.entries);
      });
    this.foodTrackerRestService.getAllUsers().subscribe(
      (data: FoodTrackerUser[]) => {
        this.employess = data;
        this.employeesOld = data;
        this.employess.sort((a,b) => +a.employeeNumber - +b.employeeNumber);
      }
    );
    this.departmentService.getDepartmentNames().then((data) => {
      this.departmentList = data;
    });

  }

  mealsSelected() {
    this.showEmployees = false;
    this.showMeals = true;
    this.showReservations = false;
    this.clearForm();
  }

  employessSelected() {
    this.showEmployees = true;
    this.showMeals = false;
    this.showReservations = false;
    this.clearForm();
  }
  reservationsSelected() {
    this.showEmployees = true;
    this.showMeals = false;
    this.showReservations = false;
    this.clearForm();
  }

  clearForm() {
      this.searchForm.reset();
  }
  onSearch() {
      const name = this.searchForm.get("searchName")?.value;
      const dep = this.searchForm.get("searchDepartment")?.value;
      console.log(dep);
          this.employess = this.employeesOld.filter((val) => {
              return  name && (val.lastName+val.firstName).toLowerCase().includes(<string>name?.toLowerCase()) ||
                dep && val.departments.includes(dep)
            });
        }

  onSearchMeals() {
    const name = this.searchForm.get("searchName")?.value;
    const dep = this.searchForm.get("searchDepartment")?.value;
    console.log(dep);
    this.entries = this.entriesOld.filter((val) => {
      return  name && (val.lastName+val.firstName).toLowerCase().includes(<string>name?.toLowerCase()) ||
        dep && val.departments.includes(dep)
    });
    console.log(this.entries);
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

  itemTest() {
      console.log(this.departmentList);
  }

  protected readonly undefined = undefined;
}
