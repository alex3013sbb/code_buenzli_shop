import { inject, Service } from '@angular/core';
import { ProductStore } from './product-store';
import { CategoryStore } from './category-store';

@Service()
export class CategoryService {
  #productStore = inject(ProductStore);
  #categoryStore = inject(CategoryStore);


  checkForUsages(categoryName: string, categoryId: number) {
    this.#productStore.getAll().subscribe((products) => {
      let p = products.find((p) => p.category.name === categoryName);
      if (!p) {
        this.#categoryStore.delete(categoryId).subscribe();
      }
    })
  }
}
