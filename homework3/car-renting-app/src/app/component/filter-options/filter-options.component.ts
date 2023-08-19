import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/interfaces/car.interface';
import { CarRentingServiceService } from 'src/app/services/car-renting-service.service';

@Component({
  selector: 'app-filter-options',
  templateUrl: './filter-options.component.html',
  styleUrls: ['./filter-options.component.scss'],
})
export class FilterOptionsComponent implements OnInit {
  cars: Car[] = [];

  constructor(private readonly carRentingService: CarRentingServiceService) {}

  ngOnInit(): void {}

  showAvailable = () => {
    const available = this.carRentingService.showAvailable();
    this.carRentingService._rentACar.emit(available)

  };
  showRented = () => {
    const unAvailable = this.carRentingService.showRented();
    this.carRentingService._rentACar.emit(unAvailable)
  };

  showReset = () => {
    const reset = this.carRentingService.getAllCars();
    this.carRentingService._rentACar.emit(reset)
  };
}
