import { TestBed } from '@angular/core/testing';

import { SolutionBenefitService } from './solution-benefit.service';

describe('SolutionBenefitService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SolutionBenefitService = TestBed.get(SolutionBenefitService);
    expect(service).toBeTruthy();
  });
});
