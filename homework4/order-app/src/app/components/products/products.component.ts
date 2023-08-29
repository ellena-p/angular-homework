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
    this.products=this.orderService.getProducts();
  }

  onBuyProduct(productID: number){
    const productToBuy =this.orderService.buyProduct(productID)
    if (productToBuy) {
      this.products = this.orderService.getProducts();
    }
  }
}
