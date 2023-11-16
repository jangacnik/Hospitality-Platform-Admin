import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ReportComponent} from "./report/report.component";
import {UserManagmentComponent} from "./user-managment/user-managment.component";
import {MaterialModule} from "../material.module";
import {NgIcon} from "@ng-icons/core";
import {FlexModule} from "@angular/flex-layout";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { UserEditDialogComponent } from './user-edit-dialog/user-edit-dialog.component';
import { ReservationComponent } from './reservation/reservation.component';
import { EmployeesComponent } from './employees/employees.component';



@NgModule({
  declarations: [
    DashboardComponent,
    ReportComponent,
    UserManagmentComponent,
    UserEditDialogComponent,
    ReservationComponent,
    EmployeesComponent
  ],
    imports: [
        CommonModule,
        MaterialModule,
        NgIcon,
        FlexModule,
        FormsModule,
        ReactiveFormsModule
    ],
  exports: [
    DashboardComponent,
    ReportComponent,
    ReservationComponent,
    UserManagmentComponent
  ],
})
export class FoodTrackerModule { }
