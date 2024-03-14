import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersAllComponent } from './users-all.component';

describe('UsersAllComponent', () => {
  let component: UsersAllComponent;
  let fixture: ComponentFixture<UsersAllComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsersAllComponent]
    });
    fixture = TestBed.createComponent(UsersAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
