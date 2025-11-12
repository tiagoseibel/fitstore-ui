import { TestBed } from '@angular/core/testing';

import { Categoria } from './categoria';

describe('Categoria', () => {
  let service: Categoria;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Categoria);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
