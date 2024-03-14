import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { NgIcon } from '@ng-icons/core';
import { FlexModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TaskDashboardComponent } from './components/task-dashboard/task-dashboard.component';
import { TaskEditDialogComponent } from './dialogs/task-edit-dialog/task-edit-dialog.component';
import { TaskBrowserItemComponent } from './components/task-browser/task-browser-item/task-browser-item.component';
import { TaskManagerItemComponent } from './components/task-manager/task-manager-item/task-manager-item.component';
import { TaskManagerComponent } from './components/task-manager/task-manager.component';
import { TaskBrowserComponent } from './components/task-browser/task-browser.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatRadioModule } from '@angular/material/radio';
import {
  NgxMatTimepickerComponent,
  NgxMatTimepickerDirective,
} from 'ngx-mat-timepicker';
import { TaskEditItemComponent } from './dialogs/task-edit-dialog/task-edit-item/task-edit-item.component';
import { ScrollIntoViewDirective } from '../directives/scroll-into-view.directive';
import { TaskItemComponent } from './components/task-browser/task-browser-item/task-item/task-item.component';
import { TaskItemDialogComponent } from './dialogs/task-item-dialog/task-item-dialog.component';
import { TaskListEditComponent } from './components/task-list-edit/task-list-edit.component';
import { TaskEditComponent } from './components/task-edit/task-edit.component';
import { RouterModule, Routes } from '@angular/router';
import { loginActivateGuard } from '../auth/guard/login-activate.guard';
import { EditPageComponent } from './components/edit-page/edit-page.component';

const routes: Routes = [
  {
    path: '',
    component: TaskDashboardComponent,
    children: [
      {
        path: '',
        component: TaskManagerComponent,
      },
      {
        path: 'edit-task-list',
        children: [
          { path: '', component: EditPageComponent },
          { path: ':id', component: EditPageComponent },
        ],
      },
    ],
  },
];

@NgModule({
  declarations: [
    TaskDashboardComponent,
    TaskEditDialogComponent,
    TaskBrowserItemComponent,
    TaskManagerItemComponent,
    TaskManagerComponent,
    TaskBrowserComponent,
    TaskEditItemComponent,
    ScrollIntoViewDirective,
    TaskItemComponent,
    TaskItemDialogComponent,
    TaskListEditComponent,
    TaskEditComponent,
    EditPageComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
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
  ],
  exports: [],
})
export class TaskModule {}
