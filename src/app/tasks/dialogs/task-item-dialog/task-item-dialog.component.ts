import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {TaskTemplateService} from "../../services/task-template.service";
import {DepartmentService} from "../../../foodtracker/service/department.service";

@Component({
  selector: 'app-task-item-dialog',
  templateUrl: './task-item-dialog.component.html',
  styleUrls: ['./task-item-dialog.component.scss']
})
export class TaskItemDialogComponent {
  task: any
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private dialogRef: MatDialogRef<TaskItemDialogComponent>) {
    if(data && data.task) {
      this.task = data.task;
    } else {
      dialogRef.close();
    }
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
