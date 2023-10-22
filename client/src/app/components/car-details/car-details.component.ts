import { Location } from '@angular/common';
import { Component, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarsService } from 'src/app/services/cars.service';


@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.scss']
})


export class CarDetailsComponent {
  // car!: Car
  car: Car = new Car(0, '', '', 0, 0, 0);

  constructor(
    private rout: ActivatedRoute,
    private carService: CarsService,
    private location: Location,
    private router: Router,
    // private renderer: Renderer2
  ) {
    // this.renderer.setStyle(document.body, "background-image", 'url("https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg?cs=srgb&dl=pexels-mike-bird-3729464.jpg&fm=jpg")')
  };

  ngOnInit() {
    const id: number = this.rout.snapshot.params['id'];
    this.carService.getCarById(id).subscribe((data: Car) => {
      this.car = data;
    });
  };

  goBack() {
    this.location.back();
  };

  goEdit() {
    const id: number = this.rout.snapshot.params['id'];
    this.router.navigate(['/auth/car-edit', id]);
  };

};
