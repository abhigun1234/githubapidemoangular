import { TestBed, inject } from '@angular/core/testing';

import { GithubusersService } from './githubusers.service';

describe('GithubusersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GithubusersService]
    });
  });

  it('should be created', inject([GithubusersService], (service: GithubusersService) => {
    expect(service).toBeTruthy();
  }));
});
