import { EventEmitter, Injectable } from '@angular/core';
import { Product } from '../interfaces/products.interface';
import { PRODUCTS_DATA } from '../product-data/products-data';
import { BehaviorSubject, Subject } from 'rxjs';
import { Order } from '../interfaces/order.interface';

@Injectable({
  providedIn: 'root',
})
export class OrderManagerService {
  constructor() {}

  _products: Product[] = PRODUCTS_DATA;
  _orders: Order[] = [];

  allProducts: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>(
    this._products
  );

  allOrders: BehaviorSubject<Order[]> = new BehaviorSubject<Order[]>(
    this._orders
  );

  buyProduct(productID: number) {
    const productToBuy = this._products.find(
      (product) => product.id === productID
    );
    console.log(productToBuy);
    const productAlreadyBought = this._orders.find(
      (product) => product.id === productID
    );

    if (!productAlreadyBought && productToBuy && productToBuy.stock > 0) {
      this._orders = [
        ...this._orders,
        {
          ...productToBuy,
          quantity: 1,
          pricePerQuantity: productToBuy.price,
          totalPrice: productToBuy.price,
        },
      ];
    } else if (productAlreadyBought && productToBuy) {
      this._orders = this._orders.map((product) => {
        if (product.id === productID) {
          return {
            ...product,
            quantity: product.quantity + 1,
            totalPrice: productToBuy.price * (product.quantity + 1),
          };
        }
        return product;
      });
    }

    if (productToBuy && productToBuy.stock > 0) {
      this._products = this._products.map((product) => {
        if (product.id === productID) {
          return {
            ...product,
            stock: product.stock - 1,
          };
        }
        return product;
      });

      this.allProducts.next(this._products);
      this.allOrders.next(this._orders);
    }
  }

  addProduct(createProduct: Product) {
    this._products = [
      ...this._products,
      {
        ...createProduct,
      },
    ];

    this.allProducts.next(this._products);
  }
}
