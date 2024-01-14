import {Component, Input} from '@angular/core';
import {TaskEditDialogComponent} from "../../task-edit-dialog/task-edit-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {DepartmentService} from "../../../../foodtracker/service/department.service";

@Component({
  selector: 'app-task-manager-item',
  templateUrl: './task-manager-item.component.html',
  styleUrls: ['./task-manager-item.component.scss']
})
export class TaskManagerItemComponent {

  @Input() task: any;


  constructor(private matDialog: MatDialog, private departmentService: DepartmentService) {
  }

  onEditClicked() {
    this.matDialog.open(TaskEditDialogComponent, {
      width: "500px",
      data: {
        taskInfo: this.task
      }
    });
  }
}
