import { TestBed, inject } from '@angular/core/testing';

import { StepGuardService } from './step-guard.service';

describe('StepGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StepGuardService]
    });
  });

  it('should be created', inject([StepGuardService], (service: StepGuardService) => {
    expect(service).toBeTruthy();
  }));
});
