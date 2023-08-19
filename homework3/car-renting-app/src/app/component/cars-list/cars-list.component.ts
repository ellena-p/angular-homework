import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/interfaces/car.interface';
import { CarRentingServiceService } from 'src/app/services/car-renting-service.service';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.scss']
})
export class CarsListComponent implements OnInit {

  cars:Car[] =[];
  sortModel: string = 'asc';
  constructor( private readonly carRentingService: CarRentingServiceService)
  {}

  ngOnInit(): void {
   this. cars= this.carRentingService.getAllCars()
    this.carRentingService._rentACar.subscribe((data)=>{
      this.cars=data;
    })
  }
  
  rentCar =(carId:number)=>{
    this.carRentingService.rentTheCar(carId)
  }

  returnCar = (cardId:number)=>{
    this.carRentingService.returnTheCar(cardId)
  }
}
