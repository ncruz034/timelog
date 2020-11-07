import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimePerOrderComponent } from './time-per-order.component';

describe('TimePerOrderComponent', () => {
  let component: TimePerOrderComponent;
  let fixture: ComponentFixture<TimePerOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimePerOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimePerOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
