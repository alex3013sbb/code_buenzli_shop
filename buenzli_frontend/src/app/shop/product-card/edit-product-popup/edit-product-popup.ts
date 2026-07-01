import { Component, inject, input, output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Product, ProductCreate } from '../../shared/product';
import { ProductStore } from '../../shared/product-store';
import { CategoryStore } from '../../shared/category-store';
import { Category } from '../../shared/category';

@Component({
  selector: 'app-edit-product-popup',
  imports: [ReactiveFormsModule],
  templateUrl: './edit-product-popup.html',
  styleUrl: './edit-product-popup.scss',
})
export class EditProductPopup {
  readonly createProduct = output<Product>();
  readonly close = output<void>();

  readonly product = input.required<Product>();

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

  save() {
    this.productForm.markAllAsTouched();

    if (this.productForm.invalid) {
      return;
    }

    const formValue = this.productForm.getRawValue();

    this.product().name = formValue.name;
    this.product().price = formValue.price;

    this.#categoryStore.getAll().subscribe((categories) => {
      let c = categories.find(c => c.name === formValue.category);
      if (c) {
        this.#updateProduct(c);
        console.info('found suitable category');
        return;
      }
      console.info('category not found')
      this.#categoryStore.create({name: formValue.category}).subscribe((c) => {
        this.#updateProduct(c);
        console.info('updated category' + c.name);
        console.info(c);
      })
    })
  }

  #updateProduct(category: Category) {
    this.product().category = category;

    this.#productStore.update(this.product()).subscribe({
      next: () => {
        this.close.emit();
      }
    })
  }

  cancel() {
    this.close.emit();
  }
}
