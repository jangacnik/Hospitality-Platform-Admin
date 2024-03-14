import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TaskTemplateService } from '../../services/task-template.service';
import { ActivatedRoute } from '@angular/router';
import { DepartmentService } from 'src/app/foodtracker/service/department.service';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss'],
})
export class EditPageComponent {
  departmentList: any[] = [];
  taskInfo: any;
  editNew = false;
  showTaskEdit = false;
  task = null;
  loadingData = true;

  taskForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', []),
    departments: new FormControl([], []),
    doesRepeat: new FormControl(false),
    active: new FormControl(false),
    tasks: new FormControl([]),
    activeFrom: new FormControl('00:00'),
    repeat: new FormGroup({
      repeatType: new FormControl('NONE'),
      repeatEvery: new FormControl(null),
      repeatOnWeekDays: new FormControl([]),
      repeatDayEnum: new FormControl(null),
      repeatDayEnumValue: new FormControl(null),
      repeatOnMonthDay: new FormControl(null),
    }),
  });

  constructor(
    private taskService: TaskTemplateService,
    private departmentService: DepartmentService,
    private route: ActivatedRoute
  ) {}

  initFormControl(taskInfo) {
    let deps = taskInfo.departments.map((d) => d.departmentId);
    this.taskForm.controls.title.setValue(taskInfo.title);
    this.taskForm.controls.description.setValue(taskInfo.description);
    this.taskForm.controls.departments.setValue(deps);
    this.taskForm.controls.doesRepeat.setValue(
      taskInfo.repeat.repeatType !== 'NONE'
    );
    this.taskForm.controls.active.setValue(taskInfo.active);
    this.taskForm.controls.activeFrom.setValue(taskInfo.activeFrom);
    this.taskForm.controls.tasks.setValue(taskInfo.tasks);
    this.taskForm.controls.repeat.controls.repeatType.setValue(
      taskInfo.repeat.repeatType
    );
    this.taskForm.controls.repeat.controls.repeatEvery.setValue(
      taskInfo.repeat.repeatEvery
    );
    this.taskForm.controls.repeat.controls.repeatOnWeekDays.setValue(
      taskInfo.repeat.repeatOnWeekDays
    );
    this.taskForm.controls.repeat.controls.repeatDayEnum.setValue(
      taskInfo.repeat.repeatDayEnum
    );
    this.taskForm.controls.repeat.controls.repeatDayEnumValue.setValue(
      taskInfo.repeat.repeatDayEnumValue
    );
    this.taskForm.controls.repeat.controls.repeatOnMonthDay.setValue(
      taskInfo.repeat.repeatOnMonthDay
    );
    this.taskForm.updateValueAndValidity();
  }

  ngOnInit(): void {
    this.departmentService.getAllDepartmentsRequest().subscribe((data) => {
      this.departmentList = data;
    });
    // Load data from url id
    this.route.params.subscribe((params) => {
      if (params['id']) {
        this.taskService.getTaskTemplateById(params['id']).subscribe((res) => {
          this.taskInfo = res;
          this.initFormControl(this.taskInfo);
          this.loadingData = false;
        });
      } else {
        this.loadingData = false;
      }
    });
  }

  getTaskEdit(event) {
    this.showTaskEdit = event.showTaskEdit;
    this.task = event;
    if (event.saveTask) {
      this.taskForm.controls.tasks.value[event.taskIndex] = event.task;
    }
  }
}
