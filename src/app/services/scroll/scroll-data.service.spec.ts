import { TestBed, inject } from '@angular/core/testing';

import { ScrollDataService } from './scroll-data.service';

describe('ScrollDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ScrollDataService]
    });
  });

  it('should be created', inject([ScrollDataService], (service: ScrollDataService) => {
    expect(service).toBeTruthy();
  }));
});
