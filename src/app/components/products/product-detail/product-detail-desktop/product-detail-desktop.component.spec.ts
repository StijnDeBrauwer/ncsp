import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailDesktopComponent } from './product-detail-desktop.component';

describe('ProductDetailDesktopComponent', () => {
  let component: ProductDetailDesktopComponent;
  let fixture: ComponentFixture<ProductDetailDesktopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductDetailDesktopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
