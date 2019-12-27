import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingRatesComponent } from '../../accounting/billing-rates/billing-rates/billing-rates.component';

describe('BillingRatesComponent', () => {
  let component: BillingRatesComponent;
  let fixture: ComponentFixture<BillingRatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillingRatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillingRatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
