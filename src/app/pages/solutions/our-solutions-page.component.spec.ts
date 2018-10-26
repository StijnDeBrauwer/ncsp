import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurSolutionsPageComponent } from './our-solutions-page.component';

describe('OurSolutionsPageComponent', () => {
  let component: OurSolutionsPageComponent;
  let fixture: ComponentFixture<OurSolutionsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurSolutionsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurSolutionsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
