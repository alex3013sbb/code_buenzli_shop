import { Component, computed, input, signal } from '@angular/core';
import { Order } from '../../shared/order';
import { Product } from '../../shared/product';

@Component({
  selector: 'app-order-card',
  imports: [],
  templateUrl: './order-card.html',
  styleUrl: './order-card.scss',
})
export class OrderCard {

  readonly order = input.required<Order>();

  protected products = signal<Product[]>([
    { id: 1, name: 'Andi SBB Hut', price: 10, category: 'hut' },
    { id: 2, name: 'Andi Haushut', price: 20, category: 'hut' },
  ]);

  protected readonly currentProduct = computed(() => this.order().orderedProducts[0]);

  protected readonly pricePerItem = computed(() => this.currentProduct().priceAtMoment);
  protected readonly quantity = computed(() => this.currentProduct().quantity);
  protected readonly totalPrice = computed(() =>
    this.order().orderedProducts.reduce(
      (sum, item) => sum + item.quantity * item.priceAtMoment,
      0,
    ),
  );

  protected readonly productName = computed(() => {
    const product = this.products().find((p) => p.id === this.currentProduct().product_id);
    return product?.name;
  });

  protected readonly status = computed(() => {
    switch (this.order().status_id) {
      case 1:
        return 'In Bearbeitung';
      case 2:
        return 'Versendet';
      case 3:
        return 'Geliefert';
      default:
        return 'Unbekannt';
    }
  });
}