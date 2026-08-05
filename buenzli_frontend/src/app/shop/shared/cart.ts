import { Product } from './product';
import { CartItem } from './cartItem';

export interface Cart {
  id: number;
}

export type CartCreate = Omit<Cart, 'id'>
