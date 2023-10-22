import { Component, Input } from '@angular/core';
import { Car } from 'src/app/models/car';


@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})


export class CarComponent {
  isInTop: any = false;
  carsInTop: Car[] = [];
  imgPath: string = 'star-black.png';
  // imgPath: string = 'assets/images/star-black.png';

  @Input() car: Car = new Car(0, '', '', 0, 0, 0);
  @Input() index: number = 0;

  ngOnInit() {
    this.index = this.index + 1;
    this.carsInTop = JSON.parse(localStorage.getItem('carsInTop')!);
    this.isInTop = this.carsInTop.map((car) => car.id === this.car.id);
    this.isInTop = this.isInTop.includes(true);
    if (this.isInTop) {
      this.imgPath = 'star-colored.png';
    }
  };


  addToTopHandler() {
    this.isInTop = !this.isInTop;
    this.imgPath = this.isInTop ? 'star-colored.png' : 'star-black.png';

    const carsInTop = JSON.parse(localStorage.getItem('carsInTop')!) || [];
    const existCars = carsInTop.find((car: Car) => car.id === this.car.id);

    if (existCars) {
      const idxToDelete = carsInTop.findIndex((car: Car) => car.id === existCars.id);
      carsInTop.splice(idxToDelete, 1);
    }
    else {
      carsInTop.push({ ...this.car, isInTop: this.isInTop });
    }


    localStorage.setItem('carsInTop', JSON.stringify(carsInTop));
  };
};
