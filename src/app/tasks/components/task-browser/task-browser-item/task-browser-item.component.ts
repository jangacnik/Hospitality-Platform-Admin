import {Component, Input} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {TaskItemDialogComponent} from "../../../dialogs/task-item-dialog/task-item-dialog.component";

@Component({
  selector: 'app-task-browser-item',
  templateUrl: './task-browser-item.component.html',
  styleUrls: ['./task-browser-item.component.scss']
})
export class TaskBrowserItemComponent {
  @Input() task: any;

  constructor(private dialog: MatDialog) {
  }

  getNumberOfCompletedTasks() {
    return this.task.tasks.filter(tk => tk.completed).length;
  }

  openTaskItem(item) {
    let dialogRef = this.dialog.open(TaskItemDialogComponent, {
      width: "500px",
      data: {
        task: item
      }
    })
  }
}
