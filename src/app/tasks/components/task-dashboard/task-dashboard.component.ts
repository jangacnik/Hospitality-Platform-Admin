import { Component } from '@angular/core';
import {TaskEditDialogComponent} from "../task-edit-dialog/task-edit-dialog.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-task-dashboard',
  templateUrl: './task-dashboard.component.html',
  styleUrls: ['./task-dashboard.component.scss']
})
export class TaskDashboardComponent {
  showManager = true;
  showBrowser = false;

  constructor(private matDialog: MatDialog) {
  }
  onManagerClicked() {
    this.showBrowser = false;
    this.showManager = true;
  }
  onBrowserClicked() {
    this.showBrowser = true;
    this.showManager = false;
  }

  onCreateClicked() {
    this.matDialog.open(TaskEditDialogComponent, {
      width: "500px"
    });
  }

}
