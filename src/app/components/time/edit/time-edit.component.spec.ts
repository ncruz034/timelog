import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TimeEditComponent } from './time-edit.component';

describe('TimeEditComponent', () => {
  let component: TimeEditComponent;
  let fixture: ComponentFixture<TimeEditComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
