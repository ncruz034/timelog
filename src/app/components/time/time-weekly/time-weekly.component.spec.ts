import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TimeWeeklyComponent } from './time-weekly.component';

describe('TimeWeeklyComponent', () => {
  let component: TimeWeeklyComponent;
  let fixture: ComponentFixture<TimeWeeklyComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeWeeklyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeWeeklyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
