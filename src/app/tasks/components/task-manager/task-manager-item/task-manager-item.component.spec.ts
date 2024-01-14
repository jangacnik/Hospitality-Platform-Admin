import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskManagerItemComponent } from './task-manager-item.component';

describe('TaskManagerItemComponent', () => {
  let component: TaskManagerItemComponent;
  let fixture: ComponentFixture<TaskManagerItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskManagerItemComponent]
    });
    fixture = TestBed.createComponent(TaskManagerItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
