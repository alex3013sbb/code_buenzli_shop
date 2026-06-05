import { Component } from '@angular/core';
import { ProductPage } from './product-page/product-page';

@Component({
  selector: 'app-main-page',
  imports: [ProductPage],
  templateUrl: './main-page.html',
  styleUrl: './main-page.scss',
})
export class MainPage {}
