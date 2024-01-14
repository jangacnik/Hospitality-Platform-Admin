import {Component, OnInit} from '@angular/core';
import {TaskService} from "../../services/task.service";
import {MatDialog} from "@angular/material/dialog";
import {TaskEditDialogComponent} from "../task-edit-dialog/task-edit-dialog.component";

@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.scss']
})
export class TaskManagerComponent implements OnInit{

  taskTemplateList = [];
  constructor(private taskService: TaskService,
               private matDialog: MatDialog) {
  }

  ngOnInit(): void {
    this.taskService.getTaskTemplates().subscribe(
      (res: any[]) => {
        this.taskTemplateList = res;
      }
    )
  }



}
