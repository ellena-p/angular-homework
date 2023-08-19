import { EventEmitter, Injectable } from '@angular/core';
import { EngineType } from '../interfaces/car-engine.enum';
import { Car } from '../interfaces/car.interface';

@Injectable({
  providedIn: 'root',
})
export class CarRentingServiceService {
  private _allCars: Car[] = [
    {
      id: 1,
      model: 'Skoda Kamiq',
      engineType: EngineType.PETROL,
      yearOfProduction: '2022',
      priceToRent: 1800,
      image:
        'https://cf-cdn-v5.skoda.at/media/Model_Stage_Image_Component/4382-stage-image/dh-991-e9d92a/c2b75dbc/1690981340/kamiq.png',
      isRented: false,
    },
    {
      id: 2,
      model: 'Hyundai Elantra',
      engineType: EngineType.HYBRID,
      yearOfProduction: '2021',
      priceToRent: 1900,
      image:
        'https://i.pinimg.com/originals/14/d8/22/14d8222b29e9afb5ceb974e72722ae9c.jpg',
      isRented: false,
    },
    {
      id: 3,
      model: 'Peugeot 208 ',
      engineType: EngineType.DIESEL,
      yearOfProduction: '2023',
      priceToRent: 1500,
      image: 'https://www.pngmart.com/files/22/Peugeot-208-2019-PNG-Pic.png',
      isRented: true,
    },
    {
      id: 4,
      model: 'Toyota Yaris',
      engineType: EngineType.PETROL,
      yearOfProduction: '2021',
      priceToRent: 1700,
      image:
        'https://toyotagarutofficial.com/wp-content/uploads/2019/03/1_citrus-mica-metallic.png',
      isRented: true,
    },
  ];

  _rentACar = new EventEmitter<Car[]>();

  

  getAllCars = () => {
    return this._allCars;
  };

  rentTheCar = (carId: number) => {
    this._allCars = this._allCars.map((car) => {
      if (car.id === carId && !car.isRented) {
        return {
          ...car,
          isRented: true,
        };
      }
      return car;
    });
    this._rentACar.emit(this._allCars);
  };

  returnTheCar = (carId: number) => {
    this._allCars = this._allCars.map((car) => {
      if (car.id === carId && car.isRented) {
        return {
          ...car,
          isRented: false,
        };
      }
      return car;
    });
    this._rentACar.emit(this._allCars);
  };

  showAvailable= ()=>{
    return this._allCars.filter((car)=> !car.isRented)
  }
  showRented = ()=>{
    return this._allCars.filter((car)=> car.isRented)
  }

  
}
