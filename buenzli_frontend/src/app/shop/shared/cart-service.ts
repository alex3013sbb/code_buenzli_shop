import { inject, Service } from '@angular/core';
import { CartStore } from './cart-store';
import { Cart, CartCreate } from './cart';
import { Product } from './product';

@Service()
export class CartService {
  #cartStore = inject(CartStore);

  #cart: Cart | undefined;

  constructor() {
    this.#cartStore.getAll().subscribe((carts) => {
      if (carts.length === 0) {
        this.#cartStore.create({ products: [] }).subscribe({
          next: (createdCart) => {
            this.#cart = createdCart;
          },
        });
      } else {
        this.#cart = carts[0]
      }
    });
  }

  addProduct(product: Product) {
    if (this.#cart === undefined) {
      console.warn('cart is undefined');
      return;
    }

    this.#cart = {
      ...this.#cart,
      products: [...this.#cart.products, product],
    };

    this.#cartStore.update(this.#cart).subscribe({
      next: () => {
        console.log('updated cart');
    }});

  }
}
