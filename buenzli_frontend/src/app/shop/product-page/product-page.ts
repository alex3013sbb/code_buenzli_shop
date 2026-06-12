import { Component, computed, inject, input, signal } from '@angular/core';
import { ProductCard } from '../product-card/product-card';
import { Product } from '../shared/product';
import { Category } from '../shared/category';
import { CategoryStore } from '../shared/category-store';
import { ProductStore } from '../shared/product-store';
import { AddProductPopup } from './add-product-popup/add-product-popup';

@Component({
  selector: 'app-product-page',
  imports: [ProductCard, AddProductPopup],
  templateUrl: './product-page.html',
  styleUrl: './product-page.scss',
})
export class ProductPage {
  #categoryStore = inject(CategoryStore);
  #productStore = inject(ProductStore);

  protected readonly activeCategory = computed(() => this.#categoryStore.getActiveCategory());

  protected readonly role = signal<'USER' | 'ADMIN'>('ADMIN');

  protected popupActive = signal(false);

  protected readonly products = signal<Product[]>([]);

  constructor() {
    this.#productStore.getAll().subscribe((receivedProducts) => {
      this.products.set(receivedProducts);
    });
  }

  showPopup() {
    this.popupActive.set(true);
  }

  hidePopup() {
    this.popupActive.set(false);
    window.location.reload();
  }


}
