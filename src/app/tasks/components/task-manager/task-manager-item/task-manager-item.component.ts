import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TaskEditDialogComponent} from "../../../dialogs/task-edit-dialog/task-edit-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {DepartmentService} from "../../../../foodtracker/service/department.service";
import {TaskTemplateService} from "../../../services/task-template.service";
import {
  ConfirmationDialogComponent
} from "../../../../foodtracker/dialogs/confirmation-dialog/confirmation-dialog.component";

@Component({
  selector: 'app-task-manager-item',
  templateUrl: './task-manager-item.component.html',
  styleUrls: ['./task-manager-item.component.scss']
})
export class TaskManagerItemComponent {

  @Input() task: any;
  @Output() updateEvent: EventEmitter<any> = new EventEmitter<any>();

  constructor(private matDialog: MatDialog, private taskService: TaskTemplateService, private dialog: MatDialog) {
  }

  onEditClicked() {
    let dialogRef = this.matDialog.open(TaskEditDialogComponent, {
      width: "600px",
      // disableClose: true,
      data: {
        taskInfo: this.task
      }
    });

    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        this.updateEvent.emit();
      }
    })
  }

  private deleteTaskList() {
    this.taskService.deleteTaskTemplate(this.task.id).subscribe(
      () => {
        this.updateEvent.emit();
      }
    )
  }

  onDeleteTask(): void {
    let dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '500px',
      data: {
        title: "Delete Task list: " + this.task.title + " ",
        msg: "Are you sure you want to delete the task list?"
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteTaskList();
      }
      dialogRef = null;
    });
  }
}
