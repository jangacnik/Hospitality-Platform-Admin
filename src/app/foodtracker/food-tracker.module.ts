import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ReportComponent} from "./report/report.component";
import {UserManagmentComponent} from "./user-managment/user-managment.component";



@NgModule({
  declarations: [
    DashboardComponent,
    ReportComponent,
    UserManagmentComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DashboardComponent,
    ReportComponent,
    UserManagmentComponent
  ]
})
export class FoodTrackerModule { }
