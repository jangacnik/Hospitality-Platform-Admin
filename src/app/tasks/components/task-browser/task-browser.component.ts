import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {TaskArchiveService} from "../../services/task-archive.service";
import {DatePipe} from "@angular/common";
import {Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-task-browser',
  templateUrl: './task-browser.component.html',
  styleUrls: ['./task-browser.component.scss']
})
export class TaskBrowserComponent implements OnInit, OnDestroy{

  taskList:any[];
  @Input() updateSubject: Observable<any>;
  private eventsSubscription: Subscription;

  constructor(private taskArchiveService: TaskArchiveService, private datePipe: DatePipe) {
  }

  ngOnInit(): void {
    let defaultDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
    this.fetchTasks(defaultDate);
    this.eventsSubscription = this.updateSubject.subscribe((date) => this.fetchTasks(date));
  }

  fetchTasks(date: string) {
    this.taskArchiveService.getAllTaskByDate(date).subscribe(
      (res: any[]) => {
        this.taskList = res;
      }
    );
  }

  ngOnDestroy(): void {
    this.eventsSubscription.unsubscribe();
  }
}
