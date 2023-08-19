import { Component, OnInit } from '@angular/core';
import { CarRentingServiceService } from './services/car-renting-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Rent a car app';
  welcome = 'Choose your ride';

  constructor (){}
  
}

