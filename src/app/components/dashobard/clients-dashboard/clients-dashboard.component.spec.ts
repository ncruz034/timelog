import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ClientsDashboardComponent } from './clients-dashboard.component';

describe('ClientsDashboardComponent', () => {
  let component: ClientsDashboardComponent;
  let fixture: ComponentFixture<ClientsDashboardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientsDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
