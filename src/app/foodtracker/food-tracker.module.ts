import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ReportComponent} from "./report/report.component";
import {UserManagmentComponent} from "./user-managment/user-managment.component";
import {MaterialModule} from "../material.module";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {JwtInterceptor} from "../auth/interceptor/jwt.interceptor";



@NgModule({
  declarations: [
    DashboardComponent,
    ReportComponent,
    UserManagmentComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    DashboardComponent,
    ReportComponent,
    UserManagmentComponent
  ],
})
export class FoodTrackerModule { }
