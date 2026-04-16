import { TestBed } from '@angular/core/testing';

import { SpaceNewsServiceStatic } from './space-news-service-static';

describe('SpaceNewsServiceStatic', () => {
  let service: SpaceNewsServiceStatic;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpaceNewsServiceStatic);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
