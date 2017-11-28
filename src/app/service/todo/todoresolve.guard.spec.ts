import { TestBed, async, inject } from '@angular/core/testing';

import { TodoresolveGuard } from './todoresolve.guard';

describe('TodoresolveGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoresolveGuard]
    });
  });

  it('should ...', inject([TodoresolveGuard], (guard: TodoresolveGuard) => {
    expect(guard).toBeTruthy();
  }));
});
