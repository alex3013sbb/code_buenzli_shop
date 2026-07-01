import { Component, inject, output, signal } from '@angular/core';
import { Product, ProductCreate } from '../../shared/product';
import { ProductStore } from '../../shared/product-store';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CategoryStore } from '../../shared/category-store';
import { Category, CategoryCreate } from '../../shared/category';
import { CategoryService } from '../../shared/category-service';

@Component({
  selector: 'app-add-product-popup',
  imports: [ReactiveFormsModule],
  templateUrl: './add-product-popup.html',
  styleUrl: './add-product-popup.scss',
})
export class AddProductPopup {
  readonly close = output<void>();

  #productStore = inject(ProductStore);
  #categoryStore = inject(CategoryStore);

  protected readonly productForm = new FormGroup({
    name: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(3)],
    }),
    price: new FormControl<number>(0, {
      nonNullable: true,
      validators: [Validators.required, Validators.min(0)],
    }),
    category: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(1)],
    }),
  });

  create() {
    this.productForm.markAllAsTouched();

    if (this.productForm.invalid) {
      return;
    }

    const formValue = this.productForm.getRawValue();

    this.#categoryStore.getAll().subscribe((categories) => {
      let c = categories.find(c => c.name === formValue.category);
      if (c) {
        this.#createProduct(c);
        console.info('found suitable category');
        return;
      }
      console.info('category not found');
      this.#categoryStore.create({ name: formValue.category }).subscribe((c) => {
        this.#createProduct(c);
        console.info('created category: ' + c.name);
        console.info(c);
        return;
      });
    });
  }

  #createProduct(category: Category) {
    const product: ProductCreate = {
      ...this.productForm.getRawValue(),
      category: category,
    };

    this.#productStore.create(product).subscribe({
      next: () => {
        console.warn('created product');
        this.close.emit();
      }
    })
  }

  cancel() {
    this.close.emit();
  }
}
