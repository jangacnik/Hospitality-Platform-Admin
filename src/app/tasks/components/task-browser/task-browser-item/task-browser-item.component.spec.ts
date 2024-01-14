import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskBrowserItemComponent } from './task-browser-item.component';

describe('TaskBrowserItemComponent', () => {
  let component: TaskBrowserItemComponent;
  let fixture: ComponentFixture<TaskBrowserItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskBrowserItemComponent]
    });
    fixture = TestBed.createComponent(TaskBrowserItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
