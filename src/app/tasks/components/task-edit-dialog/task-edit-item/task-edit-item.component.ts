import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FoodTrackerUser} from "../../../../foodtracker/model/FoodTrackerUser";
import {
  ConfirmationDialogComponent
} from "../../../../foodtracker/dialogs/confirmation-dialog/confirmation-dialog.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-task-edit-item',
  templateUrl: './task-edit-item.component.html',
  styleUrls: ['./task-edit-item.component.scss']
})
export class TaskEditItemComponent {
  @Input() taskInfo: any;
  @Input() editing = false;
  @Input() index: number;
  @Output() deleteEvent: EventEmitter<number> = new EventEmitter<number>();
  @Output() editingEvent: EventEmitter<any> = new EventEmitter<any>();

  constructor(private dialog: MatDialog) {
  }
  onClick() {
    this.editing = !this.editing;
    if(!this.editing) this.editingEvent.emit();
  }

  onDelteTask(): void {
    let dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '500px',
      data: {
        title: "Delete Task: " + this.taskInfo.title + " ",
        msg: "Are you sure you want to delete the task"
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteEvent.emit(this.index);
      }
      dialogRef = null;
    });
  }
}
