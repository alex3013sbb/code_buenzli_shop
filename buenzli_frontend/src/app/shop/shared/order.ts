import { CartItem } from "./cartItem";

export interface Order{
    id: number;
    customer_id: number;
    status_id: number;
    orderedProducts: CartItem[];
}
