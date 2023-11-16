import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FoodTrackerRestService} from "../../service/food-tracker-rest.service";
import {DepartmentListItem} from "../../model/DepartmentListItem";
import {Roles} from "../../model/enum/roles";
import {resolve} from "@angular/compiler-cli";

@Component({
  selector: 'app-create-user-dialog',
  templateUrl: './create-user-dialog.component.html',
  styleUrls: ['./create-user-dialog.component.scss']
})
export class CreateUserDialogComponent implements OnInit{
  createForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    employeeNumber: new FormControl('', [Validators.required]),
    departments: new FormControl([], []),
    roles: new FormControl([''], [Validators.required]),
  });
  departmentList: DepartmentListItem[] = [];
  constructor(public dialogRef: MatDialogRef<CreateUserDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data,
              private foodtrackerService: FoodTrackerRestService) {
      this.departmentList = data.departmentList;
  }
  validRoles = [Roles.USER, Roles.ADMIN];
  createUser() {
    this.foodtrackerService.createUser(this.createForm.value).subscribe({
      next: (v) => {
        this.dialogRef.close(true);
      },
      error: (e) => console.log(e)
    });
  }

  ngOnInit(): void {
  }


  onclose() {
    this.dialogRef.close();
  }

}
