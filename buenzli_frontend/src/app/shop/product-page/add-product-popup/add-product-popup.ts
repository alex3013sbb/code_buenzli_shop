import { Component, inject, output, signal } from '@angular/core';
import { Product } from '../../shared/product';

@Component({
  selector: 'app-add-product-popup',
  imports: [],
  templateUrl: './add-product-popup.html',
  styleUrl: './add-product-popup.scss',
})
export class AddProductPopup {
  readonly saveProduct = output<Product>();
  readonly close = output<void>();

  protected name = signal('');
  protected price = signal<number>(0);
  protected category = signal('');

  #productStore = inject(ProductStore)

  save() {
    this.#productStore

    this.saveProduct.emit({
      name: this.name(),
      price: this.price(),
      category: this.category()
    })
  }

  cancel() {}
}
