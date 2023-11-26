import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FoodTrackerUser} from "../../model/FoodTrackerUser";
import {MatChipInputEvent} from "@angular/material/chips";
import {COMMA, ENTER} from "@angular/cdk/keycodes";
import {FoodTrackerRestService} from "../../service/food-tracker-rest.service";
import {DepartmentListItem} from "../../model/DepartmentListItem";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Roles} from "../../model/enum/roles";

@Component({
  selector: 'app-user-edit-dialog',
  templateUrl: './user-edit-dialog.component.html',
  styleUrls: ['./user-edit-dialog.component.scss']
})
export class UserEditDialogComponent implements OnInit {

  editForm: FormGroup<{
    firstName: FormControl<string | null>;
    lastName: FormControl<string | null>;
    roles: FormControl<string[] | null>;
    departments: FormControl<any[] | null>;
    email: FormControl<string | null>;
    employeeNumber: FormControl<string | null>;
    oldEmail: FormControl<string | null>;
  }>;
  user: FoodTrackerUser;

  validRoles = [Roles.USER, Roles.ADMIN];
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  departmentList: DepartmentListItem[] = [];

  constructor(public dialogRef: MatDialogRef<UserEditDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private foodtrackerService: FoodTrackerRestService) {
    this.departmentList = data.departmentList;
    this.user = data.user;
    this.user.oldEmail = this.user.email;
  }

  ngOnInit(): void {
    this.editForm = new FormGroup({
      email: new FormControl(this.user.email, [Validators.required]),
      firstName: new FormControl(this.user.firstName, [Validators.required]),
      lastName: new FormControl(this.user.lastName, [Validators.required]),
      employeeNumber: new FormControl(this.user.employeeNumber, [Validators.required]),
      departments: new FormControl(this.user.departments, []),
      roles: new FormControl(this.user.roles, [Validators.required]),
      oldEmail: new FormControl(this.user.oldEmail),
    });
  }

  onSubmit() {
    this.foodtrackerService.updateUserPersonalInfo(this.editForm.value).subscribe(
      (success) => {
        this.dialogRef.close(true);
      },
      (err) => {

      }
    )
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '');
    // Add our fruit
    if (value) {
      // @ts-ignore
      this.user?.departments.push(value);
    }
    // Clear the input value
    event.chipInput!.clear();
  }

  remove(dep: string): void {
    // @ts-ignore
    const index = this.user?.departments.indexOf(dep);
    if (index !== undefined && index >= 0) {
      // @ts-ignore
      this.user?.departments.splice(index, 1);
    }
  }
}
