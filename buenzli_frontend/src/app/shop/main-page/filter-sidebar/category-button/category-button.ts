import { Component, input, output, inject } from '@angular/core';
import { Category } from '../../../shared/category';
import { CategoryStore } from '../../../shared/category-store';

@Component({
  selector: 'app-category-button',
  imports: [],
  templateUrl: './category-button.html',
  styleUrl: './category-button.scss',
})
export class CategoryButton {
  readonly category = input<Category | undefined>();

  readonly setCategory = output<Category>();

  #categoryService = inject(CategoryStore);

  selectCategory() {
    this.#categoryService.setActiveCategory(this.category());
  }
}
