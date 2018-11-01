import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideSideNavigationComponent } from './slide-side-navigation.component';

describe('SlideSideNavigationComponent', () => {
  let component: SlideSideNavigationComponent;
  let fixture: ComponentFixture<SlideSideNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideSideNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideSideNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
