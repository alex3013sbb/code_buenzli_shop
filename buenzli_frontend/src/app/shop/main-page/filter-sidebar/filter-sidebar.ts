import { Component, signal, inject } from '@angular/core';
import { Category } from '../../shared/category';
import { CategoryButton } from './category-button/category-button';
import { CategoryStore } from '../../shared/category-store';

@Component({
  selector: 'app-filter',
  imports: [CategoryButton],
  templateUrl: './filter-sidebar.html',
  styleUrl: './filter-sidebar.scss',
})
export class FilterSidebar {
  #categoryService = inject(CategoryStore);

  protected readonly categories = signal<Category[]>([]);

  constructor() {
    this.#categoryService.getAll().subscribe((receivedCategories) => {
      this.categories.set(receivedCategories);
    })
  }
}
