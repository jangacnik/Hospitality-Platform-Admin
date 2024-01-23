import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule} from "../material.module";
import {NgIcon} from "@ng-icons/core";
import {FlexModule} from "@angular/flex-layout";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {TaskDashboardComponent} from "./components/task-dashboard/task-dashboard.component";
import {TaskEditDialogComponent} from "./components/task-edit-dialog/task-edit-dialog.component";
import {TaskBrowserItemComponent} from "./components/task-browser/task-browser-item/task-browser-item.component";
import {TaskManagerItemComponent} from "./components/task-manager/task-manager-item/task-manager-item.component";
import { TaskManagerComponent } from './components/task-manager/task-manager.component';
import { TaskBrowserComponent } from './components/task-browser/task-browser.component';
import {MatTabsModule} from "@angular/material/tabs";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatRadioModule} from "@angular/material/radio";
import {NgxMatTimepickerComponent, NgxMatTimepickerDirective} from "ngx-mat-timepicker";
import { TaskEditItemComponent } from './components/task-edit-dialog/task-edit-item/task-edit-item.component';
import {AppModule} from "../app.module";
import {ScrollIntoViewDirective} from "../directives/scroll-into-view.directive";


@NgModule({
  declarations: [
    TaskDashboardComponent,
    TaskEditDialogComponent,
    TaskBrowserItemComponent,
    TaskManagerItemComponent,
    TaskManagerComponent,
    TaskBrowserComponent,
    TaskEditItemComponent,
    ScrollIntoViewDirective
  ],
  imports: [
    CommonModule,
    MaterialModule,
    NgIcon,
    FlexModule,
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatSlideToggleModule,
    MatRadioModule,
    NgxMatTimepickerComponent,
    NgxMatTimepickerDirective,
    AppModule
  ],
  exports: [
    TaskManagerItemComponent,
    TaskBrowserItemComponent,
    TaskEditDialogComponent,
    TaskDashboardComponent
  ],
})
export class TaskModule {
}
