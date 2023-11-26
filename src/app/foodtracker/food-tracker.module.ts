import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ReportComponent} from "./report/report.component";
import {UserManagmentComponent} from "./user-managment/user-managment.component";
import {MaterialModule} from "../material.module";
import {NgIcon} from "@ng-icons/core";
import {FlexModule} from "@angular/flex-layout";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {UserEditDialogComponent} from './dialogs/user-edit-dialog/user-edit-dialog.component';
import {ReservationComponent} from './reservation/reservation.component';
import {EmployeesComponent} from './employees/employees.component';
import {CreateUserDialogComponent} from './dialogs/create-user-dialog/create-user-dialog.component';
import {CreateDepartmentDialogComponent} from './dialogs/create-department-dialog/create-department-dialog.component';
import {ConfirmationDialogComponent} from './dialogs/confirmation-dialog/confirmation-dialog.component';
import {NoticeDialogComponent} from './dialogs/notice-dialog/notice-dialog.component';
import {PdImportDialogComponent} from './dialogs/pd-import-dialog/pd-import-dialog.component';


@NgModule({
  declarations: [
    DashboardComponent,
    ReportComponent,
    UserManagmentComponent,
    UserEditDialogComponent,
    ReservationComponent,
    EmployeesComponent,
    CreateUserDialogComponent,
    CreateDepartmentDialogComponent,
    ConfirmationDialogComponent,
    NoticeDialogComponent,
    PdImportDialogComponent
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
export class FoodTrackerModule {
}
