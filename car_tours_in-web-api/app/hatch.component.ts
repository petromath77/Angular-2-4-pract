import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Car } from './car';
import { CarService }  from './car.service';

@Component({
    templateUrl: './templates/hatchback.html',
})


export class HatchComponent implements OnInit{
    cars: Car[];
  
    constructor(
      private carService: CarService,
      private router: Router) { }
   
    getCars(): void {
      this.carService
          .getCars()
          .then(cars => this.cars = cars);
    }
   
    ngOnInit(): void {
      this.getCars();
    }
}
