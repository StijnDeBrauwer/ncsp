import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurVisionPage } from './our-vision.page';

describe('OurVisionPage', () => {
  let component: OurVisionPage;
  let fixture: ComponentFixture<OurVisionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurVisionPage ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurVisionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
