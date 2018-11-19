import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericUrlComponent } from './generic-url.component';

describe('GenericUrlComponent', () => {
  let component: GenericUrlComponent;
  let fixture: ComponentFixture<GenericUrlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenericUrlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
