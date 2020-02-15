import { TestBed, inject } from '@angular/core/testing';

import { PwnageService } from './pwnage.service';

describe('PwnageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PwnageService]
    });
  });

  it('should be created', inject([PwnageService], (service: PwnageService) => {
    expect(service).toBeTruthy();
  }));
});
