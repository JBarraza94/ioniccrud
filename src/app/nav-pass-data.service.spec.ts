import { TestBed } from '@angular/core/testing';

import { NavPassDataService } from './nav-pass-data.service';

describe('NavPassDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NavPassDataService = TestBed.get(NavPassDataService);
    expect(service).toBeTruthy();
  });
});
