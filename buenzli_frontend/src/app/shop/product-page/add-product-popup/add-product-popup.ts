import { Component, inject, output, signal } from '@angular/core';
import { Product, ProductCreate } from '../../shared/product';
import { ProductStore } from '../../shared/product-store';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-product-popup',
  imports: [ReactiveFormsModule],
  templateUrl: './add-product-popup.html',
  styleUrl: './add-product-popup.scss',
})
export class AddProductPopup {
  readonly createProduct = output<Product>();
  readonly close = output<void>();

  // protected name = signal('');
  // protected price = signal<number>(0);
  // protected category = signal('');

  #productStore = inject(ProductStore);

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
    })
  });

  create() {
    this.productForm.markAllAsTouched();

    if (this.productForm.invalid) {
      return;
    }

    const formValue = this.productForm.getRawValue();

    const product: ProductCreate = {
      ...formValue
    };

    this.#productStore.create(product).subscribe({
      next: () => {
        this.close.emit();
      }
    });
  }

  cancel() {
    this.close.emit();
  }
}
