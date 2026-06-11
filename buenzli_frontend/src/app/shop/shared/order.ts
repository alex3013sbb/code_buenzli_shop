import { OrderedProductInfo } from "./orderedProductInfo";

export interface Order{
    id: number;
    customer_id: number;
    status_id: number;
    orderedProducts: OrderedProductInfo[];
}