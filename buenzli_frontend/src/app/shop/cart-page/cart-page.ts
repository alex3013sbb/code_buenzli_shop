import { Component, inject } from '@angular/core';
import { Header } from '../main-page/header/header';
import { CartService } from '../shared/cart-service';
import { CartItem } from '../shared/cartItem';

@Component({
  selector: 'app-cart-page',
  imports: [Header],
  templateUrl: './cart-page.html',
  styleUrl: './cart-page.scss',
})
export class CartPage {
  #cartService = inject(CartService);

  protected readonly cartProducts = this.#cartService.cartProducts;
  protected readonly total = this.#cartService.total;

  placeOrder() {
    console.log('Place order', this.#cartService.cartItems(), 'total', this.#cartService.total());
  }

  down(item: CartItem) {
    this.#cartService.addQuantity(item, -1);
    window.location.reload();
  }

  up(item: CartItem) {
    this.#cartService.addQuantity(item, 1);
    window.location.reload();
  }
}
