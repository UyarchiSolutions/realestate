import { TestBed } from '@angular/core/testing';

import { StartPostingService } from './start-posting.service';

describe('StartPostingService', () => {
  let service: StartPostingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StartPostingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
