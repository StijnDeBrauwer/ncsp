import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSolutionsComponent } from './dashboard-solutions.component';

describe('DashboardSolutionsComponent', () => {
  let component: DashboardSolutionsComponent;
  let fixture: ComponentFixture<DashboardSolutionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardSolutionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardSolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
