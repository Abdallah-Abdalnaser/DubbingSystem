import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { mainhomeGuard } from './mainhome.guard';

describe('mainhomeGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => mainhomeGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
