import { Component, signal } from '@angular/core';
import { Order } from '../../shared/order';
import { OrderCard } from '../order-card/order-card';

@Component({
  selector: 'app-orders-container',
  imports: [OrderCard],
  templateUrl: './orders-container.html',
  styleUrl: './orders-container.scss',
})
export class OrdersContainer {

  protected orders = signal<Order[]>([
    {
      id: 101,
      customer_id: 1,
      status_id: 1,
      orderedProducts: [
        { id: 1, product_id: 1, quantity: 2, priceAtMoment: 10, order_id: 101 },
      ],
    },
    {
      id: 102,
      customer_id: 1,
      status_id: 2,
      orderedProducts: [
        { id: 2, product_id: 2, quantity: 1, priceAtMoment: 20, order_id: 102 },
      ],
    },
    {
      id: 103,
      customer_id: 1,
      status_id: 3,
      orderedProducts: [
        { id: 3, product_id: 1, quantity: 3, priceAtMoment: 15, order_id: 103 },
      ],
    },
  ]);
}
