import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTypePage } from './product-type.page';

describe('ProductTypePage', () => {
  let component: ProductTypePage;
  let fixture: ComponentFixture<ProductTypePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductTypePage ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductTypePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
