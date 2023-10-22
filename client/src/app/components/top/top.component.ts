import { Component } from '@angular/core';
import { Car } from 'src/app/models/car';


@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss']
})


export class TopComponent {
  carsInTop: Car[] = [];

  ngOnInit() {
    this.carsInTop = JSON.parse(localStorage.getItem('carsInTop')!);
  };

  delFromTopHandler(id: number) {
    this.carsInTop = this.carsInTop.filter((car) => car.id !== id);
    localStorage.setItem('carsInTop', JSON.stringify(this.carsInTop));
  };

};
