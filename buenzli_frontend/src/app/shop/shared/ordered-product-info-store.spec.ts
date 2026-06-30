import { TestBed } from '@angular/core/testing';

import { OrderedProductInfoStore } from './ordered-product-info-store';

describe('OrderedProductInfoStore', () => {
  let service: OrderedProductInfoStore;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderedProductInfoStore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
