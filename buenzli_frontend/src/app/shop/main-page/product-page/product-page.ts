import { Component } from '@angular/core';
import { ProductCard } from './product-card/product-card';

@Component({
  selector: 'app-product-page',
  imports: [ProductCard],
  templateUrl: './product-page.html',
  styleUrl: './product-page.scss',
})
export class ProductPage {}
