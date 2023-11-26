import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CreateDepartmentDialogComponent} from './create-department-dialog.component';

describe('CreateDepartmentDialogComponent', () => {
  let component: CreateDepartmentDialogComponent;
  let fixture: ComponentFixture<CreateDepartmentDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateDepartmentDialogComponent]
    });
    fixture = TestBed.createComponent(CreateDepartmentDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
