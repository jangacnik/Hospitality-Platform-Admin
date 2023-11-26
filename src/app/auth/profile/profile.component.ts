import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {DepartmentListItem} from "../../foodtracker/model/DepartmentListItem";
import {Roles} from "../../foodtracker/model/enum/roles";
import {FoodTrackerUser} from "../../foodtracker/model/FoodTrackerUser";
import {FoodTrackerRestService} from "../../foodtracker/service/food-tracker-rest.service";
import {data} from "autoprefixer";
import {DepartmentService} from "../../foodtracker/service/department.service";
import {PdImportDialogComponent} from "../../foodtracker/dialogs/pd-import-dialog/pd-import-dialog.component";
import {
  ChangePasswordDialogComponent
} from "../../foodtracker/dialogs/change-password-dialog/change-password-dialog.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit{
  dataReady = false;
  readonly = true;
  form: FormGroup<{
    email: FormControl<string | null>;
    employeeNumber: FormControl<string | null>;
    firstName: FormControl<string | null>;
    lastName: FormControl<string | null>;
    roles: FormControl<string[] | null>;
    departments: FormControl<any[] | null>;
    oldEmail: FormControl<string | null>;
  }>;

  departmentList: DepartmentListItem[] = [];
  validRoles = [Roles.USER, Roles.ADMIN];
  userData: FoodTrackerUser;
  updateData() {

  }

  constructor(private dialog: MatDialog,private foodtracker: FoodTrackerRestService, private departmentService: DepartmentService) {
  }
  ngOnInit(): void {
      this.departmentService.getDepartmentNames(false).then((d) => {
        this.departmentList = d;
        if(this.foodtracker.user) {
          this.userData = this.foodtracker.user;
          this.initData(this.userData);
        } else {
          this.refreshData();
        }
      });

  }

  refreshData() {
    this.foodtracker.getUserData().subscribe((data) => {
      this.userData = data;
      this.foodtracker.user = data;
      this.initData(this.userData);
    }, () =>{}, ()=> {
      this.initData(this.userData);
    });
  }

  initData(data) {
    this.form = new FormGroup({
      email: new FormControl(data.email, [Validators.required]),
      firstName: new FormControl(data.firstName, [Validators.required]),
      lastName: new FormControl(data.lastName, [Validators.required]),
      employeeNumber: new FormControl(data.employeeNumber, [Validators.required]),
      departments: new FormControl(data.departments, [Validators.required]),
      roles: new FormControl(data.roles, [Validators.required]),
      oldEmail: new FormControl(data.email),
    });
    this.form?.get("departments").disable();
    this.form?.get("roles").disable();
    this.dataReady = true;
  }

  onEdit() {
    this.readonly = !this.readonly;
    this.readonly ? this.disableForm() : this.enableForm();
  }
  enableForm() {
    this.form?.get("departments").enable();
    this.form?.get("roles").enable();
    this.readonly = false;
  }
  disableForm() {
    this.readonly = true;
    this.form?.get("departments").disable();
    this.form?.get("roles").disable();
  }


  onSaveChanges() {
    this.foodtracker.updateUserPersonalInfo(this.form.value).subscribe(
      (success) => {
        this.refreshData();
        this.disableForm();
      },
      (err) => {
      }
    )
  }

  onChangePassword() {
    let dialogRef = this.dialog.open(ChangePasswordDialogComponent, {
      width: '500px'
    });
    dialogRef.afterClosed().subscribe(result => {

    });
  }
}
