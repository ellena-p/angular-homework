import { EventEmitter, Injectable } from '@angular/core';
import { Product } from '../interfaces/products.interface';
import { PRODUCTS_DATA } from '../product-data/products-data';

@Injectable({
  providedIn: 'root',
})
export class OrderManagerService {
  constructor() {}

  private _products: Product[] = PRODUCTS_DATA;
  private _orders: Product[] = []

  
  getProducts(): Product[] {
    return this._products;
  }

  getOrders(): Product[]{
    return this._orders;
  }
  
  buyProduct(productID: number): boolean {
    const productToBuy = this._products.find((product)=> product.id === productID)
    console. log (productToBuy)
    
    if (productToBuy && productToBuy.stock>0){
     
      this._orders.push(productToBuy)
    
    console.log (this._orders)

    this._products=this._products.map((product) => {
      if (product.id === productID) {
        return {
          ...product,
          stock: product.stock - 1,
        };
      }
      return product;
    });
    return true
  }
  return false
  }
}
