import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionDetailsPageComponent } from './solution-details-page.component';

describe('SolutionDetailsPageComponent', () => {
  let component: SolutionDetailsPageComponent;
  let fixture: ComponentFixture<SolutionDetailsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolutionDetailsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolutionDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
