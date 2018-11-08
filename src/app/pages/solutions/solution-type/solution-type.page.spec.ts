import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionTypePage } from './solution-type.page';

describe('SolutionTypeComponent', () => {
  let component: SolutionTypePage;
  let fixture: ComponentFixture<SolutionTypePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolutionTypePage ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolutionTypePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
