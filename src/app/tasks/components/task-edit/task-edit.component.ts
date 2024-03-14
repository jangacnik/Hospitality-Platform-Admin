import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.scss'],
})
export class TaskEditComponent {
  @Input() task;
  @Output() showTaskEdit: EventEmitter<any> = new EventEmitter();

  taskForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', []),
  });

  constructor() {}

  ngOnInit(): void {
    this.initFormControl();
  }

  initFormControl() {
    this.taskForm.controls.title.setValue(this.task.task.title);
    this.taskForm.controls.description.setValue(this.task.task.description);
  }

  prepareTaskForUpdate() {
    this.task.task.title = this.taskForm.controls.title.value;
    this.task.task.description = this.taskForm.controls.description.value;
  }

  onTaskEditBtnClick() {
    const dataToEmit = {
      showTaskEdit: false,
      task: this.task.task,
      taskIndx: this.task.taskIndex,
      saveTask: false,
    };
    this.showTaskEdit.emit(dataToEmit);
  }

  onSubmit() {
    if (this.taskForm.valid) {
      this.prepareTaskForUpdate();
      const dataToEmit = {
        showTaskEdit: false,
        task: this.task.task,
        taskIndx: this.task.taskIndex,
        saveTask: true,
      };
      this.showTaskEdit.emit(dataToEmit);
    }
  }
}
