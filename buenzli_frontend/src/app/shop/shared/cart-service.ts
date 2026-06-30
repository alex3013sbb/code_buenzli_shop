import { computed, inject, Service, signal } from '@angular/core';
import { CartStore } from './cart-store';
import { Cart, CartCreate } from './cart';
import { Product } from './product';
import { OrderedProductInfoStore } from './ordered-product-info-store';
import { OrderedProductInfo } from './orderedProductInfo';
import { ProductStore } from './product-store';

@Service()
export class CartService {
  #cartStore = inject(CartStore);
  #orderedProductInfoStore = inject(OrderedProductInfoStore);
  #productStore = inject(ProductStore);

  #cart: Cart | undefined;

  readonly products = signal<Product[]>([]);

  readonly cartItems = signal<OrderedProductInfo[]>([]);

  readonly cartProducts = computed(() =>
    this.cartItems().map((item) => ({
      ...item,
      product: this.products().find((p) => p.id === item.product_id),
    })),
  );

  readonly total = computed(() =>
    this.cartItems().reduce((sum, item) => sum + item.quantity * item.priceAtMoment, 0),
  );

  constructor() {
    this.#cartStore.getAll().subscribe((carts) => {
      if (carts.length === 0) {
        this.#cartStore.create({ products: [] }).subscribe({
          next: (createdCart) => {
            this.#cart = createdCart;
          },
        });
      } else {
        this.#cart = carts[0];
      }
    });

    this.#productStore.getAll().subscribe((items) => {
      this.products.set(items);
    });

    this.#orderedProductInfoStore.getAll().subscribe((items) => {
      this.cartItems.set(items);
    });
  }

  addProduct(product: Product) {
    if (this.#cart === undefined) {
      console.warn('cart is undefined');
      return;
    }

    this.#orderedProductInfoStore
      .create({
        product_id: product.id,
        quantity: 1,
        priceAtMoment: product.price,
        order_id: this.#cart.id,
      })
      .subscribe({
        next: () => console.log('added to cart')
      });
  }
}
