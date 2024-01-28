import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskItemDialogComponent } from './task-item-dialog.component';

describe('TaskItemDialogComponent', () => {
  let component: TaskItemDialogComponent;
  let fixture: ComponentFixture<TaskItemDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskItemDialogComponent]
    });
    fixture = TestBed.createComponent(TaskItemDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
