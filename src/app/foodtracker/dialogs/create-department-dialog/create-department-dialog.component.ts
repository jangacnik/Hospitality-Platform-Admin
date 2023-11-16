import {Component, Inject} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FoodTrackerRestService} from "../../service/food-tracker-rest.service";
import {Roles} from "../../model/enum/roles";
import {DepartmentService} from "../../service/department.service";
import {CreateUserDialogComponent} from "../create-user-dialog/create-user-dialog.component";

@Component({
  selector: 'app-create-department-dialog',
  templateUrl: './create-department-dialog.component.html',
  styleUrls: ['./create-department-dialog.component.scss']
})
export class CreateDepartmentDialogComponent {
  createForm = new FormGroup({
    departmentName: new FormControl('', [Validators.required])
  });
  constructor(public dialogRef: MatDialogRef<CreateUserDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data,
              private departmentService: DepartmentService) {
  }
  createDepartment() {
    this.departmentService.createDepartment(this.createForm.value).subscribe({
      next: (v) => {
        this.onclose()
      },
      error: (e) => console.log(e)
    });
  }



  onclose() {
    this.dialogRef.close();
  }
}
