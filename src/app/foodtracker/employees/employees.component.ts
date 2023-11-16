import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {FoodTrackerUser} from "../model/FoodTrackerUser";
import {DepartmentListItem} from "../model/DepartmentListItem";
import {UserEditDialogComponent} from "../user-edit-dialog/user-edit-dialog.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit{
  searchForm = new FormGroup({
    searchName: new FormControl('', []),
    searchDepartment: new FormControl('', [])
  });

  @Input() employees: FoodTrackerUser[] = [];
  @Input() departmentList: DepartmentListItem[];
  employeesOld: FoodTrackerUser[] = [];

  displayedColumns: string[] = ['employeeNumber', 'name', 'department', 'options'];
  constructor(private dialog: MatDialog) {
  }
  clearForm() {
    this.searchForm.reset();
  }

  ngOnInit(): void {
    this.employeesOld = this.employees;
  }
  onSearch() {
    const name = this.searchForm.get("searchName").value;
    const dep = this.searchForm.get("searchDepartment").value;
    if (dep && name) {
      this.employees = this.employeesOld.filter((val) => {
        return (val.lastName + val.firstName).toLowerCase().includes(<string>name?.toLowerCase()) &&
          val.departments.includes(dep)
      });
    } else if (dep) {
      this.employees = this.employeesOld.filter((val) => {
        return val.departments.includes(dep)
      });
    } else if (name) {
      this.employees = this.employeesOld.filter((val) => {
        return (val.lastName + val.firstName).toLowerCase().includes(<string>name?.toLowerCase())
      });
    }

  }

  onReset() {
    this.employees = this.employeesOld;
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
}
