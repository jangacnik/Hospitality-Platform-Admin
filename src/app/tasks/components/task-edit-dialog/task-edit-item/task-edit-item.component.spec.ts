import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskEditItemComponent } from './task-edit-item.component';

describe('TaskEditItemComponent', () => {
  let component: TaskEditItemComponent;
  let fixture: ComponentFixture<TaskEditItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskEditItemComponent]
    });
    fixture = TestBed.createComponent(TaskEditItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
