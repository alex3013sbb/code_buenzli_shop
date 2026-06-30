import { Component, computed, inject, signal } from '@angular/core';
import { Product } from '../shared/product';
import { OrderedProductInfo } from '../shared/orderedProductInfo';
import { Header } from '../main-page/header/header';
import { CartStore } from '../shared/cart-store';
import { OrderedProductInfoStore } from '../shared/ordered-product-info-store';
import { ProductStore } from '../shared/product-store';
import { CartService } from '../shared/cart-service';

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
}
