import { TestBed } from '@angular/core/testing';

import { TaskTemplateService } from './task-template.service';

describe('TaskService', () => {
  let service: TaskTemplateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskTemplateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
