import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TimeCreateComponent } from './time-create.component';

describe('TimeCreateComponent', () => {
  let component: TimeCreateComponent;
  let fixture: ComponentFixture<TimeCreateComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
