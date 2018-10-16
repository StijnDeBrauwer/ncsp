import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurNewsPageComponent } from './our-news-page.component';

describe('OurNewsPageComponent', () => {
  let component: OurNewsPageComponent;
  let fixture: ComponentFixture<OurNewsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurNewsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurNewsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
