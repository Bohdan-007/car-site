import { Pipe, PipeTransform } from '@angular/core';
import { Car } from '../models/car';


@Pipe({
  name: 'carSearch'
})


export class CarSearchPipe implements PipeTransform {

  transform(cars: Car[], search: string, searchParam: string) {

    if (searchParam === 'price') {
      return cars.filter((car: any) => car[searchParam].toString().includes(search));
    };

    return cars.filter((car: any) => car[searchParam].toLowerCase().includes(search.toLowerCase()));
  };

};
