import { Category } from "./category.enum";

export interface Order{
    id: number,
    name: string,
    description: string,
    pricePerQuantity:number,
    category:Category,
    quantity: number,
    totalPrice: number
}