import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FoodTrackerUser} from "../model/FoodTrackerUser";
import {MatChipInputEvent} from "@angular/material/chips";
import {COMMA, ENTER} from "@angular/cdk/keycodes";
import {FoodTrackerRestService} from "../service/food-tracker-rest.service";

@Component({
  selector: 'app-user-edit-dialog',
  templateUrl: './user-edit-dialog.component.html',
  styleUrls: ['./user-edit-dialog.component.css']
})
export class UserEditDialogComponent implements OnInit{
  user: FoodTrackerUser | undefined;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  constructor(public dialogRef: MatDialogRef<UserEditDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: { user: FoodTrackerUser },
              private foodtrackerService: FoodTrackerRestService) {
  }

  ngOnInit(): void {
    this.user = this.data.user;
    this.user.oldEmail = this.user.email;
  }

  onSubmit() {
    this.foodtrackerService.updateUserPersonalInfo(this.user).subscribe(
      (success) => {
        console.log(success);
        this.dialogRef.close();
      },
      (err) => {
        console.log(err);
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
