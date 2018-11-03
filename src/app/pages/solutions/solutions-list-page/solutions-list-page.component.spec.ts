import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionsListPageComponent } from './solutions-list-page.component';

describe('SolutionsListPageComponent', () => {
  let component: SolutionsListPageComponent;
  let fixture: ComponentFixture<SolutionsListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolutionsListPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolutionsListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
