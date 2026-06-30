import { computed, inject, Service, signal } from '@angular/core';
import { CartStore } from './cart-store';
import { Cart, CartCreate } from './cart';
import { Product } from './product';
import { CartItemStore } from './cart-item-store';
import { CartItem } from './cartItem';
import { ProductStore } from './product-store';

@Service()
export class CartService {
  #cartStore = inject(CartStore);
  #cartItemStore = inject(CartItemStore);
  #productStore = inject(ProductStore);

  #cart: Cart | undefined;

  readonly products = signal<Product[]>([]);

  readonly cartItems = signal<CartItem[]>([]);

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

    this.#cartItemStore.getAll().subscribe((items) => {
      this.cartItems.set(items);
    });
  }

  addProduct(product: Product) {
    if (this.#cart === undefined) {
      console.warn('cart is undefined');
      return;
    }

    let item = this.cartItems().find((i) => {
      console.log(product.name + ' product-id: ' + product.id);
      console.log('item-product_id: ' + i.product_id);
      return i.product_id === product.id;
    });
    console.log(item);

    if (item) {
      // object -> true | undefined -> false
      this.#cartItemStore
        .update({
          ...item,
          quantity: item.quantity + 1,
        })
        .subscribe({
          next: () => {
            console.log('updated item.quantity');
          },
        });

      console.log(this.cartItems());
      return;
    }

    this.#cartItemStore
      .create({
        product_id: product.id,
        quantity: 1,
        priceAtMoment: product.price,
        order_id: this.#cart.id,
      })
      .subscribe({
        next: () => {
          console.log('added to cart');
        },
      });
  }

  addQuantity(item: CartItem, difference: number) {
    if (item.quantity + difference < 1) {
      this.removeProduct(item);
      return;
    }

    this.#cartItemStore
      .update({
        ...item,
        quantity: item.quantity + difference,
      })
      .subscribe({
        next: () => {
          console.log('quantity changed by: ' + difference);
        },
      });
  }

  removeProduct(item: CartItem) {
    let product = this.products().find((p) => p.id === item.product_id);
    if (!confirm(`Willst du das Produkt '${product?.name}' aus dem Warenkorb löschen?`)) {
      return;
    }

    if (!product) {
      console.error('Product not found!');
    }

    this.#cartItemStore.delete(item.id).subscribe({
      next: () => {
        console.log('removed item');
      },
    });
  }
}
