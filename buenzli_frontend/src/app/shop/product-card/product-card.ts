import { Component, inject, input, signal } from '@angular/core';
import { Product } from '../shared/product';
import { EditProductPopup } from './edit-product-popup/edit-product-popup';
import { ProductStore } from '../shared/product-store';
import { userRole } from '../shared/auth';
import { CartService } from '../shared/cart-service';
import { CategoryStore } from '../shared/category-store';
import { CategoryService } from '../shared/category-service';

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

  #productStore = inject(ProductStore);
  #cartService = inject(CartService);
  #categoryService = inject(CategoryService);

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
      let categoryName = this.product().category.name;
      let categoryId = this.product().category.id;
      this.#productStore.delete(this.product().id).subscribe({
        next: () => {
          this.#categoryService.checkForUsages(categoryName, categoryId);
        },
      });
    }
    window.location.reload();
  }

  addToCart() {
    this.#cartService.addProduct(this.product());
    window.location.reload();
  }
}
