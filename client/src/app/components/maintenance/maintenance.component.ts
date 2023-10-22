import { Component } from '@angular/core';
import { flush } from '@angular/core/testing';
import { Router } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarsService } from 'src/app/services/cars.service';


@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.scss']
})


export class MaintenanceComponent {
  constructor(private carService: CarsService, private router: Router) { };

  cars: Car[] = [];
  isDelSpinerShow: boolean = false;
  deleteCarId: any = null;

  ngOnInit() {
    this.carService.getCars().subscribe((data: Car[]) => {
      this.cars = data;
    });
  };


  createCar() { };

  showCarDetails(id: number) {
    this.router.navigate(['/auth/car-details', id]);
  };
  
  editCar(id: number) {
    this.router.navigate(['/auth/car-edit', id]);
  };

  deleteCar(id: number) {
    this.isDelSpinerShow = true;
    this.deleteCarId = id;

    this.carService.deleteCar(id).subscribe((data) => {
      this.isDelSpinerShow = false;

      this.cars.splice(this.cars.findIndex((car) => car.id == id), 1)
    });
  };

};
