import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ReportComponent} from "./report/report.component";
import {UserManagmentComponent} from "./user-managment/user-managment.component";
import {MaterialModule} from "../material.module";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {JwtInterceptor} from "../auth/interceptor/jwt.interceptor";
import {NgIcon} from "@ng-icons/core";
import {FlexModule} from "@angular/flex-layout";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { UserEditDialogComponent } from './user-edit-dialog/user-edit-dialog.component';



@NgModule({
  declarations: [
    DashboardComponent,
    ReportComponent,
    UserManagmentComponent,
    UserEditDialogComponent
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
    UserManagmentComponent
  ],
})
export class FoodTrackerModule { }
