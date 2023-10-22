import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarsService } from 'src/app/services/cars.service';


@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.scss']
})


export class CarAddComponent {
  constructor(
    private rout: ActivatedRoute,
    private carService: CarsService,
    private location: Location,
    private router: Router,
  ) { };

  addCarForm: FormGroup = new FormGroup({
    'carName': new FormControl('', Validators.required),
    'carModel': new FormControl('', Validators.required),
    'carPrice': new FormControl('', Validators.required),
    'carEngineCapacity': new FormControl(''),
    'carMileage': new FormControl(''),
  });


  onSave() {
    const newCar: Car = new Car(
      Date.now(),
      this.addCarForm.value.carName,
      this.addCarForm.value.carModel,
      this.addCarForm.value.carPrice,
      this.addCarForm.value.carEngineCapacity,
      this.addCarForm.value.carMileage,
    );

    this.carService.addCar(newCar).subscribe(() => { });
    this.location.back();
  };

  goBack() {
    this.location.back();
  };
};
