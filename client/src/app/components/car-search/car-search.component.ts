import { Component } from '@angular/core';
import { CarsService } from 'src/app/services/cars.service';



@Component({
  selector: 'app-car-search',
  templateUrl: './car-search.component.html',
  styleUrls: ['./car-search.component.scss']
})


export class CarSearchComponent {
  constructor(private carsService: CarsService) { };

  searchCarInput: string = '';
  searchCarByValue: string = 'name';


  updateSearchVelue() {
    this.carsService.newSearchCarInput.next(this.searchCarInput);    
    this.carsService.newSearchCarParam.next(this.searchCarByValue);
  };
};
