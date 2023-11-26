import {TestBed} from '@angular/core/testing';

import {FoodTrackerRestService} from './food-tracker-rest.service';

describe('FoodTrackerRestService', () => {
  let service: FoodTrackerRestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoodTrackerRestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
