import { Product } from './product';
import { OrderedProductInfo } from './orderedProductInfo';

export interface Cart {
  id: number;
}

export type CartCreate = Omit<Cart, 'id'>
