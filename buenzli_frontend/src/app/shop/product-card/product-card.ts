import { Component, inject, input, signal } from '@angular/core';
import { Product } from '../shared/product';
import { EditProductPopup } from './edit-product-popup/edit-product-popup';
import { ProductStore } from '../shared/product-store';
import { userRole } from '../shared/auth';
import { CartService } from '../shared/cart-service';

@Component({
  selector: 'app-product-card',
  imports: [EditProductPopup],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss',
})
export class ProductCard {
  readonly role = userRole;

  readonly product = input.required<Product>();

  readonly editActive = signal(false);

  #productService = inject(ProductStore);
  #cartService = inject(CartService);

  editProduct() {
    this.editActive.set(true);
  }

  hideEditProduct() {
    this.editActive.set(false);
    window.location.reload();
  }

  deleteProduct() {
    if (
      confirm(
        `Bist du sicher, dass du das Produkt '${this.product().name}' löschen ` +
          `willst? Diese Aktion kann nicht rückgängig gemacht werden!`,
      )
    ) {
      this.#productService.delete(this.product().id).subscribe();
    }
    window.location.reload();
  }

  addToCart() {
    this.#cartService.addProduct(this.product());
    window.location.reload();
  }
}
