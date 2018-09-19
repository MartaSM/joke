import { TestBed, inject } from '@angular/core/testing';

import { JokeFavService } from './joke-fav.service';

describe('JokeFavService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JokeFavService]
    });
  });

  it('should be created', inject([JokeFavService], (service: JokeFavService) => {
    expect(service).toBeTruthy();
  }));
});
