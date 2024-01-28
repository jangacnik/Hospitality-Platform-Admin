import { Component } from '@angular/core';
import {TaskEditDialogComponent} from "../task-edit-dialog/task-edit-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {TaskService} from "../../services/task.service";
import {Subject} from "rxjs";

@Component({
  selector: 'app-task-dashboard',
  templateUrl: './task-dashboard.component.html',
  styleUrls: ['./task-dashboard.component.scss']
})
export class TaskDashboardComponent {
  showManager = true;
  showBrowser = false;
  eventsSubject: Subject<void> = new Subject<void>();

  constructor(private matDialog: MatDialog, private taskService: TaskService) {
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
    let dialogRef = this.matDialog.open(TaskEditDialogComponent, {
      width: "500px"
    });
    dialogRef.afterClosed().subscribe((res) => {
      if(res) {
        this.eventsSubject.next();
      }
    })

  }

}
