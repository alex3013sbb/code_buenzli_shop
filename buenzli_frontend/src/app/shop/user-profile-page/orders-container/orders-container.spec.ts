import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersContainer } from './orders-container';

describe('OrdersContainer', () => {
  let component: OrdersContainer;
  let fixture: ComponentFixture<OrdersContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrdersContainer],
    }).compileComponents();

    fixture = TestBed.createComponent(OrdersContainer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
