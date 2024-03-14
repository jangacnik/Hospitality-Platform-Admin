import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { TaskTemplateService } from '../../services/task-template.service';
import { MatDialog } from '@angular/material/dialog';
import { TaskEditDialogComponent } from '../../dialogs/task-edit-dialog/task-edit-dialog.component';
import { Observable, Subscription } from 'rxjs';
import { ConfirmationDialogComponent } from 'src/app/foodtracker/dialogs/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.scss'],
})
export class TaskManagerComponent implements OnInit, OnDestroy {
  taskTemplateList = [];
  @Input() updateSubject: Observable<any>;
  private eventsSubscription: Subscription;
  constructor(
    private taskService: TaskTemplateService,
    private matDialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getTaskList();
    this.eventsSubscription = this.updateSubject.subscribe(() =>
      this.getTaskList()
    );
  }

  getTaskList() {
    this.taskService.getTaskTemplates().subscribe((res: any[]) => {
      this.taskTemplateList = res;
    });
  }

  onCreateClicked() {
    let dialogRef = this.matDialog.open(TaskEditDialogComponent, {
      width: '500px',
    });
    dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        this.getTaskList();
      }
    });
  }

  private deleteTaskList(taskListID, index) {
    this.taskService.deleteTaskTemplate(taskListID).subscribe(() => {
      this.taskTemplateList.splice(index, 1);
    });
  }

  onDeleteTask(task, index): void {
    let dialogRef = this.matDialog.open(ConfirmationDialogComponent, {
      width: '500px',
      data: {
        title: 'Delete Task list: ' + task.title + ' ',
        msg: 'Are you sure you want to delete the task list?',
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.deleteTaskList(task.id, index);
      }
      dialogRef = null;
    });
  }

  ngOnDestroy(): void {
    this.eventsSubscription?.unsubscribe();
  }
}
