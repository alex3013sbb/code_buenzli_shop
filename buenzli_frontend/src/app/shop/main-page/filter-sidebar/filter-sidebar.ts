import { Component, signal } from '@angular/core';
import { Category } from '../../shared/category';
import { CategoryButton } from './category-button/category-button';

@Component({
  selector: 'app-filter',
  imports: [CategoryButton],
  templateUrl: './filter-sidebar.html',
  styleUrl: './filter-sidebar.scss',
})
export class FilterSidebar {
  protected readonly categories = signal<Category[]>([
    {
      id: 1,
      name: 'Alle',
    },
    {
      id: 2,
      name: 'Strohhüte',
    },
    {
      id: 3,
      name: 'Krawatten',
    },
    {
      id: 4,
      name: 'Wollmützen',
    },
  ]);

  setCategory(category: Category) {
    console.warn('reached filter-sidebar > setCategory')
  }
}
