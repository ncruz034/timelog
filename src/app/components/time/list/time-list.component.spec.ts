import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TimeListComponent } from './time-list.component';

describe('ListComponent', () => {
  let component: TimeListComponent;
  let fixture: ComponentFixture<TimeListComponent>;
  let panelExpanded = false;
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
