import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AssociatesDashboardComponent } from './associates-dashboard.component';

describe('AssociatesDashboardComponent', () => {
  let component: AssociatesDashboardComponent;
  let fixture: ComponentFixture<AssociatesDashboardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AssociatesDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssociatesDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
