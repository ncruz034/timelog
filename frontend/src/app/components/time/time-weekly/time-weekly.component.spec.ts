import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeWeeklyComponent } from './time-weekly.component';

describe('TimeWeeklyComponent', () => {
  let component: TimeWeeklyComponent;
  let fixture: ComponentFixture<TimeWeeklyComponent>;

  beforeEach(async(() => {
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
