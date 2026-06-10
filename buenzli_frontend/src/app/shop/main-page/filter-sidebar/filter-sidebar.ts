import { Component, signal } from '@angular/core';
import { Category } from '../../shared/category';

@Component({
  selector: 'app-filter',
  imports: [],
  templateUrl: './filter-sidebar.html',
  styleUrl: './filter-sidebar.scss',
})
export class FilterSidebar {
  protected readonly categories = signal<Category[]>([
    {
      id: 1,
      name: 'Alle'
    },
    {
      id: 2,
      name: 'Strohhüte'
    },
    {
      id: 3,
      name: 'Krawatten'
    },
    {
      id: 4,
      name: 'Wollmützen'
    }
  ])
}
