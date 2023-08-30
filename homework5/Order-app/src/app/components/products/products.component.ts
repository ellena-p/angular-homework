import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/products.interface';
import { OrderManagerService } from 'src/app/service/order-manager.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit{

  constructor(private readonly orderService: OrderManagerService){}

  products: Product[];

  ngOnInit(){
    this.orderService.allProducts.subscribe((data) =>{
      this.products = data
    })
  }

  onBuyProduct(productID: number){
    this.orderService.buyProduct(productID)
  }
}
