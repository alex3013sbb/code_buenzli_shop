import { Component, signal } from '@angular/core';
import { ProductPage } from '../product-page/product-page';
import { FilterSidebar } from './filter-sidebar/filter-sidebar';
import { Header } from './header/header';
import { Category } from '../shared/category';

@Component({
  selector: 'app-main-page',
  imports: [ProductPage, FilterSidebar, Header],
  templateUrl: './main-page.html',
  styleUrl: './main-page.scss',
})
export class MainPage {}
