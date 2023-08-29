import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/interfaces/products.interface';
import { OrderManagerService } from 'src/app/service/order-manager.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  constructor(private readonly orderService: OrderManagerService,
   ){}

  orders : Product[]

  ngOnInit(){
    this.orders = this.orderService.getOrders();
  
  }


}
