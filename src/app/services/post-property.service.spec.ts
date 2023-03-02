import { TestBed } from '@angular/core/testing';

import { PostPropertyService } from './post-property.service';

describe('PostProperty', () => {
  let service: PostPropertyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostPropertyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
