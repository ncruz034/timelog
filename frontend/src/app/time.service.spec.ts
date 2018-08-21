import { TestBed, inject } from '@angular/core/testing';

import { TimeService } from './time.service';

describe('CurrencyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TimeService]
    });
  });

  it('should be created', inject([TimeService], (service: TimeService) => {
    expect(service).toBeTruthy();
  }));
});
