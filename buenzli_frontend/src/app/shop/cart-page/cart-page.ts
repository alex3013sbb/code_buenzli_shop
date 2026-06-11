import { Component, computed, signal } from '@angular/core';
import { Product } from '../shared/product';
import { OrderedProductInfo } from '../shared/orderedProductInfo';
import { Header } from '../main-page/header/header';

@Component({
  selector: 'app-cart-page',
  imports: [Header],
  templateUrl: './cart-page.html',
  styleUrl: './cart-page.scss',
})
export class CartPage {
  protected products = signal<Product[]>([
    { id: 1, name: 'Andi SBB Hut', price: 10, category: 'hut' },
    { id: 2, name: 'Andi Haushut', price: 20, category: 'hut' },
  ]);

  protected cartItems = signal<OrderedProductInfo[]>([
    { id: 1, product_id: 1, quantity: 2, priceAtMoment: 10, order_id: 0 },
    { id: 2, product_id: 2, quantity: 1, priceAtMoment: 20, order_id: 0 },
  ]);

  protected readonly cartProducts = computed(() =>
    this.cartItems().map((item) => ({
      ...item,
      product: this.products().find((p) => p.id === item.product_id),
    })),
  );

  protected readonly total = computed(() =>
    this.cartItems().reduce((sum, item) => sum + item.quantity * item.priceAtMoment, 0),
  );

  placeOrder() {
    console.log('Place order', this.cartItems(), 'total', this.total());
  }
}
