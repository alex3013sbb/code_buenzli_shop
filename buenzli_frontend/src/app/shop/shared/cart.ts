import { Product } from './product';

export interface Cart {
  id: number;
  products: Product[];
}

export type CartCreate = Omit<Cart, 'id'>
