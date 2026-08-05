import { TestBed } from '@angular/core/testing';

import { CartItemStore } from './cart-item-store';

describe('CartItemStore', () => {
  let service: CartItemStore;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartItemStore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
