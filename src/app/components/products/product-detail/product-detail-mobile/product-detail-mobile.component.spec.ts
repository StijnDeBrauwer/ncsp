import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailMobileComponent } from './product-detail-mobile.component';

describe('ProductDetailMobileComponent', () => {
  let component: ProductDetailMobileComponent;
  let fixture: ComponentFixture<ProductDetailMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductDetailMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
