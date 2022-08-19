import { TestBed } from '@angular/core/testing';

import { SecureInnerPagesGuard } from './secure-innerpages.guard';

describe('SecureInnerpagesGuard', () => {
  let guard: SecureInnerPagesGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SecureInnerPagesGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
