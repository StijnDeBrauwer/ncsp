import { TestBed } from '@angular/core/testing';

import { CrownBaeleProductsService } from './crown-baele-products.service';

describe('CrownBaeleProductsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CrownBaeleProductsService = TestBed.get(CrownBaeleProductsService);
    expect(service).toBeTruthy();
  });
});
