import { TestBed } from '@angular/core/testing';

import { SubHostService } from './sub-host.service';

describe('SubHostService', () => {
  let service: SubHostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubHostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
