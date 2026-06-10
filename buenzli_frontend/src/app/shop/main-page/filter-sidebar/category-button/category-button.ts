import { Component, input, output } from '@angular/core';
import { Category } from '../../../shared/category';

@Component({
  selector: 'app-category-button',
  imports: [],
  templateUrl: './category-button.html',
  styleUrl: './category-button.scss',
})
export class CategoryButton {
  readonly category = input.required<Category>();

  readonly setCategory = output<Category>();

  selectCategory() {
    this.setCategory.emit(this.category());
  }
}
