import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CarsService } from 'src/app/services/cars.service';
import { Car } from 'src/app/models/car';


@Component({
  selector: 'app-car-edit',
  templateUrl: './car-edit.component.html',
  styleUrls: ['./car-edit.component.scss']
})


export class CarEditComponent {
  car: Car = new Car(0, '', '', 0, 0, 0);

  constructor(
    private rout: ActivatedRoute,
    private carService: CarsService,
    private router: Router,
  ) { };

  editCarForm!: FormGroup;

  ngOnInit() {
    const id: number = this.rout.snapshot.params['id'];
    this.carService.getCarById(id).subscribe((data: Car) => {
      this.car = data;

      this.editCarForm = new FormGroup({
        'carName': new FormControl(this.car.name, Validators.required),
        'carModel': new FormControl(this.car.model, Validators.required),
        'carPrice': new FormControl(this.car.price, Validators.required),
        'carEngineCapacity': new FormControl(this.car.engineCapacity),
        'carMileageField': new FormControl(this.car.mileage),
      });
    });
  };

  goBack() {
    this.router.navigate(['/auth/maintenance']);
  };

  onSave(id: number) {
    const newCar: Car = new Car(
      id,
      this.editCarForm.value.carName,
      this.editCarForm.value.carModel,
      this.editCarForm.value.carPrice,
      this.editCarForm.value.carEngineCapacity,
      this.editCarForm.value.carMileageField,
    );

    this.carService.editeCar(id, newCar).subscribe(() => { });
    this.router.navigate(['/auth/maintenance']);
  };

};
