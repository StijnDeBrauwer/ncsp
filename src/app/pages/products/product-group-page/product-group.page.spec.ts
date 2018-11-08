import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurProductPageComponent } from './product-group.page';

describe('OurProductPageComponent', () => {
  let component: OurProductPageComponent;
  let fixture: ComponentFixture<OurProductPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurProductPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurProductPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
