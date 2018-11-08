import { TestBed } from '@angular/core/testing';

import { ThirdPartyProductsService } from './third-party-products.service';

describe('ThirdPartyProductsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ThirdPartyProductsService = TestBed.get(ThirdPartyProductsService);
    expect(service).toBeTruthy();
  });
});
