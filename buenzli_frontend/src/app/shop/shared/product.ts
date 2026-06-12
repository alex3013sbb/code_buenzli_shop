import { Category } from './category';

export interface Product {
  id: number;
  name: string;
  price: number;
  category: Category;
}

export type ProductCreate = Omit<Product, 'id'>
