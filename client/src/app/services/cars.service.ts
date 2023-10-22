import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, delay, map, of, retry } from 'rxjs';
import { Car } from '../models/car';



@Injectable({
  providedIn: 'root'
})


export class CarsService {

  constructor(private http: HttpClient) { };

  url: string = 'http://localhost:3000/cars';
  searchCarInput: string = '';
  searchCarParam: string = 'name';

  public newSearchCarInput: BehaviorSubject<string> = new BehaviorSubject<string>(this.searchCarInput);
  public newSearchCarParam: BehaviorSubject<string> = new BehaviorSubject<string>(this.searchCarParam);

  getCars(): Observable<Car[]> {
    // return of(this.cars)
    return this.http.get(this.url) as Observable<Car[]>;
  };

  getCarById(id: number): Observable<Car> {
    // const car = this.cars.find((car) => car.id === id);
    // return of(car) as Observable<Car>;
    return this.http.get(`${this.url}/${id}`) as Observable<Car>;
  };

  addCar(newCar: any): Observable<any> {
    return this.http.post(this.url, newCar);
  };

  editeCar(id: number, newCar: Car): Observable<any> {
    return this.http.put(`${this.url}/${id}`, newCar);
  };

  deleteCar(id: number): Observable<any> {
    // return of({}).pipe(delay(2000), map(() => {
    //   // this.cars.splice(this.cars.findIndex((car) => car.id == id), 1)
    // }))
    return this.http.delete(`${this.url}/${id}`);
  };

};


