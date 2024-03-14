import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskTemplateService } from '../../services/task-template.service';
import { Router } from '@angular/router';
import { TaskTemplateModel } from '../../models/TaskTemplateModel';

@Component({
  selector: 'app-task-list-edit',
  templateUrl: './task-list-edit.component.html',
  styleUrls: ['./task-list-edit.component.scss'],
})
export class TaskListEditComponent {
  weekRange = [1, 2, 3, 4];
  dayRangeMonth = [
    {
      id: 1,
      label: '1st',
    },
    {
      id: 2,
      label: '2nd',
    },
    {
      id: 3,
      label: '3rd',
    },
    {
      id: 4,
      label: '4th',
    },
  ];
  dayRangeMonthFull = [
    {
      id: 1,
      label: '1st',
    },
    {
      id: 2,
      label: '2nd',
    },
    {
      id: 3,
      label: '3rd',
    },
    {
      id: 4,
      label: '4th',
    },
    {
      id: 5,
      label: '5th',
    },
    {
      id: 6,
      label: '6th',
    },
    {
      id: 7,
      label: '7th',
    },
    {
      id: 8,
      label: '8th',
    },
    {
      id: 9,
      label: '9th',
    },
    {
      id: 10,
      label: '10th',
    },
    {
      id: 11,
      label: '11th',
    },
    {
      id: 12,
      label: '12th',
    },
    {
      id: 13,
      label: '13th',
    },
    {
      id: 14,
      label: '14th',
    },
    {
      id: 15,
      label: '15th',
    },
    {
      id: 16,
      label: '16th',
    },
    {
      id: 17,
      label: '17th',
    },
    {
      id: 18,
      label: '18th',
    },
    {
      id: 19,
      label: '19th',
    },
    {
      id: 20,
      label: '20th',
    },
    {
      id: 21,
      label: '21st',
    },
    {
      id: 22,
      label: '22nd',
    },
    {
      id: 23,
      label: '23rd',
    },
    {
      id: 24,
      label: '24th',
    },
    {
      id: 25,
      label: '25th',
    },
    {
      id: 26,
      label: '26th',
    },
    {
      id: 27,
      label: '27th',
    },
    {
      id: 28,
      label: '28th',
    },
    {
      id: 29,
      label: '29th',
    },
    {
      id: 30,
      label: '30th',
    },
  ];
  weekDays = [
    {
      id: 'MONDAY',
      label: 'Monday',
    },
    {
      id: 'TUESDAY',
      label: 'Tuesday',
    },
    {
      id: 'WEDNESDAY',
      label: 'Wednesday',
    },
    {
      id: 'THURSDAY',
      label: 'Thursday',
    },
    {
      id: 'FRIDAY',
      label: 'Friday',
    },
    {
      id: 'SATURDAY',
      label: 'Saturday',
    },
    {
      id: 'SUNDAY',
      label: 'Sunday',
    },
  ];
  weekDaysMonth = [
    {
      id: 'MONDAY',
      label: 'Monday',
    },
    {
      id: 'TUESDAY',
      label: 'Tuesday',
    },
    {
      id: 'WEDNESDAY',
      label: 'Wednesday',
    },
    {
      id: 'THURSDAY',
      label: 'Thursday',
    },
    {
      id: 'FRIDAY',
      label: 'Friday',
    },
    {
      id: 'SATURDAY',
      label: 'Saturday',
    },
    {
      id: 'SUNDAY',
      label: 'Sunday',
    },

    {
      id: 'FIRSTDAY',
      label: 'First day',
    },
    {
      id: 'LASTDAY',
      label: 'Last day',
    },
  ];

  @Input() departmentList: any[] = [];
  @Input() taskInfo: any;
  @Input() taskForm: any;
  @Output() showTaskEdit: EventEmitter<any> = new EventEmitter();
  editNew = false; //?

  constructor(
    private taskService: TaskTemplateService,
    private _router: Router
  ) {}

  prepareTaskForUpdate() {
    this.taskInfo.title = this.taskForm.controls.title.value;
    this.taskInfo.description = this.taskForm.controls.description.value;
    const formDeps = this.taskForm.controls.departments.value;
    let deps = this.departmentList.filter((d) => formDeps.includes(d.id));
    this.taskInfo.departments = [];
    for (let dp of deps) {
      this.taskInfo.departments.push({
        departmentId: dp.id,
        departmentName: dp.departmentName,
      });
    }
    this.taskInfo.active = this.taskForm.controls.active.value;
    this.taskInfo.activeFrom = this.taskForm.controls.activeFrom.value;
    this.taskInfo.tasks = this.taskForm.controls.tasks.value.filter(
      (tsk) => tsk.title
    );
    this.taskInfo.repeat.repeatType =
      this.taskForm.controls.repeat.controls.repeatType.value;
    this.taskInfo.repeat.repeatEvery =
      this.taskForm.controls.repeat.controls.repeatEvery.value;
    this.taskInfo.repeat.repeatOnWeekDays =
      this.taskForm.controls.repeat.controls.repeatOnWeekDays.value;
    this.taskInfo.repeat.repeatDayEnum =
      this.taskForm.controls.repeat.controls.repeatDayEnum.value;
    this.taskInfo.repeat.repeatDayEnumValue =
      this.taskForm.controls.repeat.controls.repeatDayEnumValue.value;
    this.taskInfo.repeat.repeatOnMonthDay =
      this.taskForm.controls.repeat.controls.repeatOnMonthDay.value;
  }

  ngOnInit(): void {}

  onRepeatToggle() {
    if (!this.taskForm.controls.doesRepeat.value) {
      this.taskForm.controls.repeat.reset();
    }
  }

  onWeekly() {
    this.taskForm.controls.repeat.controls.repeatEvery.setValue(1);
    this.resetRepeat();
  }

  resetRepeat() {
    const typ = this.taskForm.controls.repeat.controls.repeatType.value;
    this.taskForm.controls.repeat.reset();
    this.taskForm.controls.repeat.controls.repeatType.setValue(typ);
    this.taskForm.updateValueAndValidity();
  }

  resetMonthly() {
    this.taskForm.controls.repeat.controls.repeatDayEnum.setValue(null);
    this.taskForm.controls.repeat.controls.repeatDayEnumValue.setValue(null);
    this.taskForm.controls.repeat.controls.repeatOnMonthDay.setValue(null);
    this.taskForm.updateValueAndValidity();
  }

  onSubmit() {
    if (this.taskForm.valid) {
      if (this.taskInfo) {
        this.prepareTaskForUpdate();
        this.taskService.putTaskTemplate(this.taskInfo).subscribe((res) => {
          this._router.navigate(['task']);
        });
      } else {
        let taskInf = this.taskForm.value;
        taskInf.tasks = taskInf.tasks.filter((tsk) => tsk.title);
        let deps = this.departmentList.filter((d) =>
          taskInf.departments.includes(d.id)
        );
        taskInf.departments = [];
        for (let dp of deps) {
          taskInf.departments.push({
            departmentId: dp.id,
            departmentName: dp.departmentName,
          });
        }
        this.taskService.postTaskTemplate(taskInf).subscribe((res) => {
          this._router.navigate(['task']);
        });
      }
    }
  }

  toggleOptions() {
    const optionsContainer = document.querySelector(
      '.options-container'
    ) as HTMLElement;
    optionsContainer.classList.toggle('active');
  }

  onTaskEditBtnClick(task, index) {
    const dataToEmit = {
      showTaskEdit: true,
      task: task,
      taskIndx: index,
    };
    this.showTaskEdit.emit(dataToEmit);
  }

  selectedTask: any;
  createTask() {
    this.taskForm.controls.tasks.value.unshift(new TaskTemplateModel(true));
    this.taskForm.updateValueAndValidity();
    setTimeout(() => {
      this.selectedTask = this.taskForm.controls.tasks.value[0];
      this.editNew = true;
    }, 50);
  }

  deleteTask(index) {
    this.editNew = false;
    this.taskForm.controls.tasks.value.splice(index, 1);
  }
}
