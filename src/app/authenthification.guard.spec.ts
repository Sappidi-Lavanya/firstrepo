import { TestBed } from '@angular/core/testing';

import { AuthenthificationGuard } from './authenthification.guard';

describe('AuthenthificationGuard', () => {
  let guard: AuthenthificationGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthenthificationGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
