/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LeiloesService } from './leiloes.service';

describe('Service: Users', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LeiloesService]
    });
  });

  it('should ...', inject([LeiloesService], (service: LeiloesService) => {
    expect(service).toBeTruthy();
  }));
});
