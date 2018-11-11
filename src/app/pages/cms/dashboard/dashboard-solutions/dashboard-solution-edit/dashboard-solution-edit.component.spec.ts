import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSolutionEditComponent } from './dashboard-solution-edit.component';

describe('DashboardSolutionEditComponent', () => {
  let component: DashboardSolutionEditComponent;
  let fixture: ComponentFixture<DashboardSolutionEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardSolutionEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardSolutionEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
