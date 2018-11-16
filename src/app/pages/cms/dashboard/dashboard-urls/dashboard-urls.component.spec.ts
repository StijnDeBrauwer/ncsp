import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardUrlsComponent } from './dashboard-urls.component';

describe('DashboardUrlsComponent', () => {
  let component: DashboardUrlsComponent;
  let fixture: ComponentFixture<DashboardUrlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardUrlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardUrlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
