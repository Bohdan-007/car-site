import { Component } from '@angular/core';
import { Car } from 'src/app/models/car';
import { CarsService } from 'src/app/services/cars.service';


@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.scss']
})


export class CarsListComponent {

  constructor(private carsService: CarsService) {
    this.carsService.newSearchCarInput.subscribe(value => {
      this.searchCarInput = value;
    });

    this.carsService.newSearchCarParam.subscribe(value => {
      this.searchCarParam = value;
    });
  };

  cars: Car[] = [];
  searchCarInput!: string;
  searchCarParam!: string;
  index: number = 0;

  ngOnInit() {
    this.carsService.getCars().subscribe((data: any) => {
      this.cars = data;
    });
  };

};
