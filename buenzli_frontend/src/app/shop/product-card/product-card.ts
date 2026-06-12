import { Component, input, signal } from '@angular/core';
import { Product } from '../shared/product';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss',
})
export class ProductCard {

  readonly role = signal<('USER' | 'ADMIN')>('ADMIN');

  readonly product = input.required<Product>();

}
