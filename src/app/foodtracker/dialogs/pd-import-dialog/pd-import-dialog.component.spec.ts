import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PdImportDialogComponent} from './pd-import-dialog.component';

describe('PdImportDialogComponent', () => {
  let component: PdImportDialogComponent;
  let fixture: ComponentFixture<PdImportDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PdImportDialogComponent]
    });
    fixture = TestBed.createComponent(PdImportDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
