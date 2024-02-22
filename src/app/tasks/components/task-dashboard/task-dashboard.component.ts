import {Component, OnInit} from '@angular/core';
import {TaskEditDialogComponent} from "../../dialogs/task-edit-dialog/task-edit-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {TaskTemplateService} from "../../services/task-template.service";
import {Subject} from "rxjs";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-task-dashboard',
  templateUrl: './task-dashboard.component.html',
  styleUrls: ['./task-dashboard.component.scss']
})
export class TaskDashboardComponent implements OnInit{
  showManager = true;
  showBrowser = false;
  templateSubject: Subject<void> = new Subject<void>();
  archiveSubject: Subject<string> = new Subject<string>();

  displayDate: string;
  today: string;
  constructor(private matDialog: MatDialog, private datePipe: DatePipe) {
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
        this.templateSubject.next();
      }
    })

  }

  ngOnInit(): void {
    this.displayDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
    this.today = this.displayDate;
    this.archiveSubject.next(this.displayDate);
  }

  onDateChange() {
    this.displayDate = this.datePipe.transform(this.displayDate, 'yyyy-MM-dd');
    this.archiveSubject.next(this.displayDate);
  }
}
