import { Category } from './category';

export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  // category: Category;
}
