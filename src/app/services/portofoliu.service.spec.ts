import { TestBed } from '@angular/core/testing';

import { PortofoliuService } from './portofoliu.service';

describe('PortofoliuService', () => {
  let service: PortofoliuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PortofoliuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
