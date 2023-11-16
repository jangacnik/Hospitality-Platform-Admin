import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  ElementRef, EventEmitter,
  HostListener,
  Input,
  OnInit, Output,
  ViewChild
} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {FoodTrackerUser} from "../model/FoodTrackerUser";
import {DepartmentListItem} from "../model/DepartmentListItem";
import {UserEditDialogComponent} from "../dialogs/user-edit-dialog/user-edit-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {CreateUserDialogComponent} from "../dialogs/create-user-dialog/create-user-dialog.component";
import {CreateDepartmentDialogComponent} from "../dialogs/create-department-dialog/create-department-dialog.component";
import {ConfirmationDialogComponent} from "../dialogs/confirmation-dialog/confirmation-dialog.component";
import {data} from "autoprefixer";
import {FoodTrackerRestService} from "../service/food-tracker-rest.service";

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit, AfterViewChecked{
  searchForm = new FormGroup({
    searchName: new FormControl('', []),
    searchDepartment: new FormControl('', [])
  });
  @Output() refresh: EventEmitter<any> = new EventEmitter();
  @Input() employees: FoodTrackerUser[] = [];
  @Input() departmentList: DepartmentListItem[];
  employeesOld: FoodTrackerUser[] = [];
  @ViewChild("self")
  self: ElementRef;
  parentH: number;
  displayedColumns: string[] = ['employeeNumber', 'name', 'department', 'options'];
  constructor(private dialog: MatDialog, private foodtrackerService: FoodTrackerRestService) {
  }
  clearForm() {
    this.searchForm.reset();
  }
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.parentH = this.self.nativeElement.offsetParent.clientHeight*0.75;
  }
  ngAfterViewChecked() {
    this.parentH = this.self.nativeElement.offsetParent.clientHeight*0.75;
  }
  ngOnInit(): void {
    this.employeesOld = this.employees;
  }
  onSearch() {
    if(this.employeesOld.length == 0) {
      this.employeesOld = this.employees;
    }
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
      data: {
        user: user,
        departmentList: this.departmentList
      }
    });

  }

  createNewUser(): void {
    let dialogRef = this.dialog.open(CreateUserDialogComponent, {
      width: '500px',
      data: {
        departmentList: this.departmentList
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.refresh.emit();
      }
      dialogRef = null;
    });
  }

  createNewDepartment(): void {
    let dialogRef = this.dialog.open(CreateDepartmentDialogComponent, {
      width: '500px'
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.refresh.emit();
      }
      dialogRef = null;
    });
  }


  deleteUser(user:FoodTrackerUser): void {
    let dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '500px',
      data:{title: "Delete User: " +user.firstName + " " + user.lastName, msg: "Are you sure you want to delete the user with employee number: "+user.employeeNumber}
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.foodtrackerService.deleteUser(user.employeeNumber).subscribe(
          {
            next: (v) => {
              this.refresh.emit();
            },
            error: (e) => {
              console.log(e);
            }
          }
        );
      }
     dialogRef = null;
    });
  }
}
