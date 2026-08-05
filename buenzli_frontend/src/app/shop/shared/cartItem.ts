export interface CartItem {
    id: number;
    product_id: number;
    quantity: number;
    priceAtMoment: number;
    order_id: number;
}

export type CartItemCreate = Omit<CartItem, 'id'>
