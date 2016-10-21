/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ContestsApiService } from './contests-api.service';

describe('Service: ContestsApi', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContestsApiService]
    });
  });

  it('should ...', inject([ContestsApiService], (service: ContestsApiService) => {
    expect(service).toBeTruthy();
  }));
});
