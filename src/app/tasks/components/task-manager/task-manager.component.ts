import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {TaskService} from "../../services/task.service";
import {MatDialog} from "@angular/material/dialog";
import {TaskEditDialogComponent} from "../task-edit-dialog/task-edit-dialog.component";
import {Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.scss']
})
export class TaskManagerComponent implements OnInit, OnDestroy{

  taskTemplateList = [];
  @Input() updateSubject: Observable<any>;
  private eventsSubscription: Subscription;
  constructor(private taskService: TaskService,
               private matDialog: MatDialog) {
  }

  ngOnInit(): void {
    this.getTaskList();
    this.eventsSubscription = this.updateSubject.subscribe(() => this.getTaskList());
  }



  getTaskList() {
    this.taskService.getTaskTemplates().subscribe(
      (res: any[]) => {
        this.taskTemplateList = res;
      }
    );
  }

  onCreateClicked() {
    let dialogRef = this.matDialog.open(TaskEditDialogComponent, {
      width: "500px"
    });
    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        this.getTaskList();
      }
    });
  }

  ngOnDestroy(): void {
    this.eventsSubscription.unsubscribe();
  }
}
