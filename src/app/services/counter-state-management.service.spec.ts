import { TestBed } from '@angular/core/testing';

import { CounterStateManagementService } from './counter-state-management.service';

describe('CounterStateManagementService', () => {
  let service: CounterStateManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CounterStateManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
