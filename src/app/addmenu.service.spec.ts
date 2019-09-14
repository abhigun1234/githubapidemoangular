import { TestBed, inject } from '@angular/core/testing';

import { AddmenuService } from './addmenu.service';

describe('AddmenuService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddmenuService]
    });
  });

  it('should be created', inject([AddmenuService], (service: AddmenuService) => {
    expect(service).toBeTruthy();
  }));
});
